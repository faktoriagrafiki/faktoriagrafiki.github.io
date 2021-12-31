// Data
const ART = require('./../../public/art.json')
const CONFIG = require('./../../public/config.json')
const LANG_FLAGS_DATA = [ 
  ['en', 'English', 'Graphics Post'], 
  ['pl', 'Polish', 'Faktoria Grafiki'] 
]
const CONTACT_ICONS_DATA = [
  ['facebook', 'Facebook'],
  ['linkedin', 'Linkedin'],
  ['instagram', 'Instagram'],
  ['artstation', 'ArtStation']
] 

// Initial viewing experience tests
describe('Initial landing', () => {
  before(() => {
    cy.visit('http://localhost:3000?l=en').wait(500)
  })
  it('displays the owner\'s name', () => {
    cy.findByText('Kamila Wera').should('be.visible')
  })
  it('displays language flags', () => {
    cy.get('[alt="en flag"]').should('be.visible')
    cy.get('[alt="pl flag"]').should('be.visible')
  })
  it('displays the contact nav button', () => {
    cy.get('[alt="en flag"]').should('be.visible')
    cy.get('[alt="pl flag"]').should('be.visible')
  })
  it('displays the animated background elements', () => {
    cy.get('.Background > *').should('have.css', 'animation-name')
  })
  it('loads at least one image', () => {
    cy.findByText('Contact').should('be.visible')
  })
  it(`renders the expected number of art pieces (${ART.pieces.length})`, () => {
    cy.get('.ArtPiece').should('have.length', ART.pieces.length)
  })
})

// Navigation and interaction tests
describe('Navigation and interaction', () => {
  before(() => {
    cy.visit('http://localhost:3000?l=en').wait(500)
  })
  describe('Language flags', () => {
    LANG_FLAGS_DATA.reverse().forEach(([key, tooltip, title]) => {
      describe(`${key}`, () => {
        it('displays tooltip on hover', () => {
          cy.get(`[alt="en flag"]`).realClick()
          cy.findByText(tooltip).should('exist').and('not.be.visible')
          cy.get(`[alt="${key} flag"]`).realHover()
          cy.findByText(tooltip).should('be.visible')
        })
        it('sets selected langauge flag as active on click', () => {
          cy.get(`[alt="${key} flag"]`).realClick().should('have.class', 'active')
        })
        it('changes langauge on langauge flag click', () => {
          cy.get('.Header > h1').should('have.text', title)
        })
        it('includes the languages\'s key as an URL parameter', () => {
          cy.url().should('include', `l=${key}`)
        }) 
      })
    })
  })
  describe('Art pieces', () => {
    ART.pieces.forEach(({key}, i) => {
      describe(key, () => {
        it('blurrs image and displays the name label on hover', () => {
          // cy.get('.ArtPiece > label').eq(i).should('exist').and('not.be.visible')
          cy.get('.ArtPiece > img').eq(i).realHover()
          cy.get('.ArtPiece > label').eq(i).should('be.visible')
        })
        it('opens the detail section on click', () => {
          cy.get('.art-modal').should('not.exist')
          cy.get('.ArtPiece > img').eq(i).realClick()
          cy.get('.art-modal').should('be.visible')
        })
        it('includes the piece\'s key as an URL parameter', () => {
          cy.url().should('include', `p=${key}`)
        }) 
        it('closes the detail section on click', () => {
          cy.get('.art-modal').realClick().should('not.exist')
        })
      })
    })
  })
  it('scrolls to the bottom on the contact button click', () => {
    cy.scrollTo('top')
    cy.isNotInViewport('.Footer', 10)
    cy.findByText('Contact').realClick().wait(1000)
    cy.isInViewport('.Footer', 10)
  })
  it('displays tooltip on email hover', () => {
    cy.findByText('Copy to clipboard').should('exist').and('not.be.visible')
    cy.findByText(CONFIG.email).realHover()
    cy.findByText('Copy to clipboard').should('be.visible')
  })
  it('copies email value to clipboard on email button click', done => {
    cy.findByText(CONFIG.email).realClick()
    cy.window().then(win => {
      win.navigator.clipboard.readText().then(text => {
        expect(text).to.eq(CONFIG.email);
        done()
      });
    });
  })
  it('displays contact icons\' tooltips on hover', () => {
    CONTACT_ICONS_DATA.forEach(([alt, text]) => {
      cy.findByText(text).should('exist').and('not.be.visible')
      cy.get(`[alt="${alt}"]`).realHover()
      cy.findByText(text).should('be.visible')
    })
  })
})

// Landing with url params tests
describe('Landing with url params', () => {
  describe('Languages', () => {
    it('defaults to polish if no langauge key given', () => {
      cy.visit('http://localhost:3000')
      cy.get(`[alt="pl flag"]`).should('have.class', 'active')
    })
    it('falls back to polish if incorrect language key given', () => {
      cy.visit('http://localhost:3000?l=errlang')
      cy.get(`[alt="pl flag"]`).should('have.class', 'active')
    })
    LANG_FLAGS_DATA.forEach(([key, tooltip, title]) => {
      describe(`${key}`, () => {
        it('sets selected langauge flag as active on load', () => {
          cy.visit(`http://localhost:3000?l=${key}`)
          cy.get(`[alt="${key} flag"]`).should('have.class', 'active')
        })
        it('sets selected language on load', () => {
          cy.get('.Header > h1').should('have.text', title)
        })
      })
    })
  })
  describe('Art pieces', () => {
    it('does not open the detail section on load if no art piece key given', () => {
      cy.visit(`http://localhost:3000`)
      cy.get('.art-modal').should('not.exist')
    })
    it('does not open the detail section on load if incorrect art piece key given', () => {
      cy.visit(`http://localhost:3000?p=errart`)
      cy.get('.art-modal').should('not.exist')
    })
    ART.pieces.forEach(({key}, i) => {
      describe(key, () => {
        it('opens the detail section on load', () => {
          cy.visit(`http://localhost:3000?p=${key}`)
          cy.get('.art-modal').should('be.visible')
        })
      })
    })
  })
})
