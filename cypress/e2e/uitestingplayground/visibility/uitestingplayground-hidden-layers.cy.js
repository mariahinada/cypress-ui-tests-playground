describe('UITesting Playground - Hidden Layers', () => {
  it('deve acessar o site, clicar no botão verde e verificar a camada azul sobreposta', () => {
    cy.visit('http://www.uitestingplayground.com/hiddenlayers')
    cy.get('.btn-success').click()
    cy.get('.spa-view').should('be.visible')
    cy.get('.btn-success').click({force:true})
      .then(() => {
        cy.log('clique forçado: o botão verde está sobreposto pela camada azul, impossibilitando a simulação do usuário')
      })
  })
})
