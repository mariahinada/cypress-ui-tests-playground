describe("UITesting Playground - Dynamic ID", () => {
  it("deve acessar a página e verificar que o id do botão muda a cada reload", () => {
    cy.visit("https://uitestingplayground.com/dynamicid");

    cy.get(".btn-primary")
      .invoke("attr", "id")
      .then((idAntes) => {
        cy.wrap(idAntes).as("idAntes");
      });

    cy.reload();

    cy.get(".btn-primary")
      .invoke("attr", "id")
      .then((idDepois) => {
        cy.get("@idAntes").should("not.equal", idDepois);
      });
  });
});
