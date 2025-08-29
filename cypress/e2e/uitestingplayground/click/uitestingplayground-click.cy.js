describe('UITesting Playground - Click', () => {
  it('deve acessar a página, clicar no botão e verificar a classe', () => {
    cy.visit('https://uitestingplayground.com/click')

    cy.get('.btn-primary')
    .click({ force: true })
    .should('have.class', 'btn-success')
  })
})
