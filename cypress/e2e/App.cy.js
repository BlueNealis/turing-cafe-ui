describe('empty spec', () => {
  beforeEach('Visit home page', () => {
    cy.visit('localhost:3000')
    cy.intercept('http://localhost:3001/api/v1/reservations', {fixture: 'reservations'})
  })

  it('Should display all reservations', () => {
    cy.get('.reservation-card').eq(1).contains('Leta')
    cy.get('.reservation-card').should('have.length', 4)
  })  //iteration 0

  it('Should have a reservation form', () => {
    cy.get('form').within(() => {
      cy.get('input').should('have.length', 4)
      cy.get('button').contains('Make Reservation')
    })
  })

  it('Should be able to create a new reservation', () => {
    cy.get('form').within(() => {
      cy.get('input').eq(0).type('Ron')
      cy.get('input').eq(1).type('10/20')
      cy.get('input').eq(2).type('8:30')
      cy.get('input').eq(3).type(4)
      cy.get('button').click()
    })
    cy.contains('Ron')
  })

  it('Should only be able to make reservation if all fields are filled out', () => {
    cy.get('form').within(() => {
      cy.get('input').eq(0).type('Ron')
      cy.get('input').eq(1).type('10/20')
      cy.get('input').eq(2).type('8:30')
      cy.get('button').click()
  })
    cy.contains('Please Fill Out All Fields')
    cy.get('form').within(() => {
      cy.get('input').eq(3).type(4)
      cy.get('button').click()
  }
})
