describe("UITesting Playground - Verify Text", () => {
  it('deve acessar a página e verificar o texto "Welcome" sem espaços', () => {
    cy.visit("http://www.uitestingplayground.com/verifytext")
    cy.get(".bg-primary > .badge-secondary")
      .invoke("text")
      .then((text) => {
      const normalizedText = text.trim()
      expect(normalizedText).to.equal("Welcome UserName!")
      })
  })
})
