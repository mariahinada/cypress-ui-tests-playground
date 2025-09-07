/// reference types='cypress' />

describe('testes funcional de login', () => {
    it('deve realizar o login com sucesso', () => {
        cy.login('standard_user','secret_sauce')
        cy.get('.product_label').should('contain', 'Products')
    })
    it('deve validar usuário incorreto', () => {
        cy.login('incorreto','secret_sauce')
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
    it('deve validar senha incorreta', () => {
        cy.login('standard_user','incorreto')   
        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
    
})