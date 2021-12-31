import '@testing-library/cypress/add-commands'
import 'cypress-real-events/support'

// viewport
Cypress.Commands.add('isNotInViewport', (element, leeway = 0) => {
  cy.get(element).then($el => {
    const bottom = Cypress.$(cy.state('window')).height()
    const rect = $el[0].getBoundingClientRect()
    expect(rect.top).to.be.greaterThan(bottom - leeway)
    expect(rect.bottom).to.be.greaterThan(bottom - leeway)
  })
})
  
Cypress.Commands.add('isInViewport', (element, leeway = 0) => {
  cy.get(element).then($el => {
    const bottom = Cypress.$(cy.state('window')).height()
    const rect = $el[0].getBoundingClientRect()
    expect(rect.top).not.to.be.greaterThan(bottom + leeway)
    expect(rect.bottom).not.to.be.greaterThan(bottom + leeway)
  })
})