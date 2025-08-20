describe('UITesting Playground - Class Attribute', () => {
  it('deve acessar a página, clicar no botão azul e validar o alert', () => {
    cy.visit('http://www.uitestingplayground.com/classattr')
    cy.get('.class3')
      .click({ force: true })

    cy.on('window:alert', (text) => {
      expect(text).to.equal('Primary button pressed')
    })
  })
})
