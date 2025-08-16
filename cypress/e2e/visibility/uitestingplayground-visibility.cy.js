describe('UITesting Playground - Visibility', () => {
  it('deve acessar a página e verificar a visibilidade de todos os botões', () => {
    cy.visit('http://www.uitestingplayground.com/visibility')

      cy.get('.btn-danger').should('be.visible')
      cy.get('.btn-warning').should('be.visible')
      cy.get('.btn-success').should('be.visible')
      cy.get('.btn-info').should('be.visible')
  })

  it('deve clicar no botão "hide" e verificar se os demais botões sumiram', () => {
    cy.visit('http://www.uitestingplayground.com/visibility')

      cy.get('.btn-primary').click()

      cy.get('.btn-danger').should('not.exist')
      cy.get('.btn-warning').should('not.be.visible')
      cy.get('.btn-info').should('be.hidden')
  })
})