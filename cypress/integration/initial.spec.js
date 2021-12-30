
describe('initial', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('displays the client\'s name', () => {
    cy.findByText('Kamila Wera').should('exist')
  })
})
