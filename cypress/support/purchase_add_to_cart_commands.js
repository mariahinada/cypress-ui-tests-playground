/// <reference types='cypress' />

// comando para adicionar produtos ao carrinho
Cypress.Commands.add('addToCart', () => {
    cy.contains('Sauce Labs Onesie').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').should('exist').should('be.visible')
    cy.get('.inventory_details_back_button').click({force: true})

    cy.contains('Sauce Labs Bike Light').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').should('exist').should('be.visible')
    cy.get('.inventory_details_back_button').click({force: true})

    cy.contains('Sauce Labs Bolt T-Shirt').click()
    cy.get('.btn_primary').click()
    cy.get('.inventory_details_back_button').should('exist').should('be.visible')
    cy.get('.inventory_details_back_button').click({force: true})
    })
