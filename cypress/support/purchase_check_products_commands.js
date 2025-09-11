/// <reference types='cypress' />

// comando para checar os produtos no carrinho
Cypress.Commands.add('checkProducts', () => {
    cy.get(':nth-child(3) > .cart_item_label').should('contain', 'Sauce Labs Onesie')
    cy.get(':nth-child(4) > .cart_item_label').should('contain', 'Sauce Labs Bike Light')
    cy.get(':nth-child(5) > .cart_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')
})
