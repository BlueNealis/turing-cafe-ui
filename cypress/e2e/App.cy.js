describe('empty spec', () => {
  beforeEach('Visit home page', () => {
    cy.visit('localhost:3000')
    cy.intercept('http://localhost:3001/api/v1/reservations', {fixture: 'reservations'})
  })

  it('Should display all reservations', () => {
    cy.get('.reservation-card').eq(1).contains('Leta')
    cy.get('.reservation-card').should('have.length', 4)
  })  //iteration 0
})
