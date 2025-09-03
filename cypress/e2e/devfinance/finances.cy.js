/// <reference types='cypress' /> // ativa as ref. dos comandos

describe('Agilizei - Dev Finances', () => {
  beforeEach(() => {
    cy.visit('https://devfinance-agilizei.netlify.app/')
    cy.get('#data-table tbody tr').should('have.length', 0)
  })

  it('cadastrar entradas', () => {
    cy.get('#transaction > .button').click() // id + classe
    cy.get('#description').type('Salário') // id
    cy.get('[name=amount]').type(5000); // atributos
    cy.get('[name=date]').type('2025-08-29'); // atributos
    cy.get('button').contains('Salvar').click(); // tipo e valor

    cy.get('#data-table tbody tr').should('have.length', 1); // quantidade de linhas na tabela
  });

  it('cadastrar saídas', () => {
    cy.get('#transaction > .button').click(); // id + classe
    cy.get('#description').type('Presente'); // id
    cy.get('[name=amount]').type(-200); // atributos
    cy.get('[name=date]').type('2025-08-29'); // atributos
    cy.get('button').contains('Salvar').click(); // tipo e valor

    cy.get('#data-table tbody tr').should('have.length', 1); // quantidade de linhas na tabela
  });

  it('remover entradas e saídas', () => {
    const entrada = 'Salário'
    const saida = 'Presente'

    cy.get('#transaction > .button').click(); // id + classe
    cy.get('#description').type(entrada); // id
    cy.get('[name=amount]').type(5000) // atributos
    cy.get('[name=date]').type('2025-08-29') // atributos
    cy.get('button').contains('Salvar').click() // tipo e valor

    cy.get('#transaction > .button').click() // id + classe
    cy.get('#description').type(saida) // id
    cy.get('[name=amount]').type(-200) // atributos
    cy.get('[name=date]').type('2025-08-29') // atributos
    cy.get('button').contains('Salvar').click() // tipo e valor

    cy.get('td.description')
    .contains(entrada)
    .parent()
    .find('img[onclick*=remove]')
    .click()

    cy.get('td.description')
    .contains(saida)
    .siblings('td')
    .children('img[onclick*=remove]')
    .click()
  })
})
