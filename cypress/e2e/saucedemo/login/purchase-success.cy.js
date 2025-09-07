/// <reference types='cypress' />

describe('E2E - Compra com Sucesso', () => {
    it('deve fazer uma compra com sucesso', () => {
        // faz login
        cy.visit('https://www.saucedemo.com/v1/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.product_label').should('contain', 'Products')

        // ordena os produtos do menor valor para o maior
        cy.get('.product_sort_container').select('Price (low to high)')
        cy.get('.inventory_list > :nth-child(1)').should('contain', 'Sauce Labs Onesie')
        cy.get('.inventory_list > :nth-child(2)').should('contain', 'Sauce Labs Bike Light')
        cy.get('.inventory_list > :nth-child(3)').should('contain', 'Sauce Labs Bolt T-Shirt')

        // adicionando produtos ao carrinho
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

        // checagem de quantidade de produtos adicionados ao carrinho
        cy.get('.shopping_cart_link').should('have.text', '3').click()

        // validação dos produtos no carrinho
        cy.get('.shopping_cart_link').click()
        cy.get(':nth-child(3) > .cart_item_label').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')

        // finalizando compra
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Nome')
        cy.get('[data-test="lastName"]').type('Sobrenome')  
        cy.get('[data-test="postalCode"]').type('00000')
        cy.get('.btn_primary').click()

        // validação dos produtos na etapa de finalização
        cy.get(':nth-child(3) > .cart_item_label').should('contain', 'Sauce Labs Onesie')
        cy.get(':nth-child(4) > .cart_item_label').should('contain', 'Sauce Labs Bike Light')
        cy.get(':nth-child(5) > .cart_item_label').should('contain', 'Sauce Labs Bolt T-Shirt')

        // validação do valor total da compra
        cy.get('.summary_total_label').should('have.text', 'Total: $36.69')

        // finaliza a compra e valida a mensagem de compra concluída
        cy.get('.btn_action').click()
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    })
})