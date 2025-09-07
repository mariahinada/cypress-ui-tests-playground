/// <reference types='cypress' />

describe('API - Teste Funcional de Login', () => {
    it('deve realizar o login com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    })

    it('deve validar senha incorreta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "incorreta"
            },
            failOnStatusCode: false // impede o cypress de falhar o teste
        }).then((response) => {
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    })
 })