/// <reference types='cypress' />

describe('Agilizei - Dev Finances', () => {
  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/');
  });

  it("cadastrar entradas", () => {
    cy.get('#transaction > .button').click(); // id + classe
    cy.get('#description').type('Salário'); // id
    cy.get('[name=amount]').type(5000); // atributos
    cy.get('[name=date]').type('2025-08-29'); // atributos
    cy.get('button').contains('Salvar').click(); // tipo e valor

    cy.get('#data-table tbody tr').should('have.length', 1) // quantidade de linhas na tabela
    });
});
