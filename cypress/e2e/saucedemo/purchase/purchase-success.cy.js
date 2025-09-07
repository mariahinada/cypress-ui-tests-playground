/// <reference types='cypress' />

describe('E2E - Compra com Sucesso', () => {
    it('deve fazer uma compra com sucesso', () => {
        // faz login
        cy.login('standard_user', 'secret_sauce')
        cy.get('.product_label').should('contain', 'Products')

        // ordena os produtos do menor valor para o maior
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.inventory_list > :nth-child(1)').should('contain', 'Sauce Labs Onesie')
        cy.get('.inventory_list > :nth-child(2)').should('contain', 'Sauce Labs Bike Light')
        cy.get('.inventory_list > :nth-child(3)').should('contain', 'Sauce Labs Bolt T-Shirt')

        // adicionando produtos ao carrinho
        cy.addToCart()

        // checagem de quantidade de produtos adicionados ao carrinho
        cy.get('.shopping_cart_link').should('have.text', '3').click()
        cy.checkProducts()

        // validação dos produtos no carrinho
        cy.get('.shopping_cart_link').click()
        cy.checkProducts()

        // finalizando compra
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Nome')
        cy.get('[data-test="lastName"]').type('Sobrenome')  
        cy.get('[data-test="postalCode"]').type('00000')
        cy.get('.btn_primary').click()

        // validação dos produtos na etapa de finalização
        cy.checkProducts()

        // validação do valor total da compra
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')

        // finaliza a compra e valida a mensagem de compra concluída
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    })
})