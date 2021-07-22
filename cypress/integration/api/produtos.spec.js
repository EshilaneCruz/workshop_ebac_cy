/// <reference types="cypress" />

//const bodyData = require('../../fixtures/api/produto.json')
const bodyData = require('../../fixtures/api/produto.js')

context('Cadastrar produto', () => {

    it('com usuário admin cadastra o produto com sucesso', () => {
        cy.listarUsuarios().then(listaDeUsuarios => {
            const admin_user = listaDeUsuarios.body.usuarios.filter((user, index, array) => user.administrador == 'true')
            cy.login(admin_user[0].email, admin_user[0].password).then( responseToken => {
                expect(responseToken.body.authorization).to.exist
                cy.cadastrarProduto(responseToken.body.authorization, bodyData).should( response => {
                    expect(response.status).to.eq(201)
                })
            })
        })

    });
    it('com usuário não admin retorna erro de rota não autorizada', () => {
        cy.listarUsuarios().then(listaDeUsuarios => {
            const admin_user = listaDeUsuarios.body.usuarios.filter((user, index, array) => user.administrador == 'false')
            cy.login(admin_user[0].email, admin_user[0].password).then( responseToken => {
                expect(responseToken.body.authorization).to.exist
                cy.cadastrarProduto(responseToken.body.authorization, bodyData).should( response => {
                    expect(response.status).to.eq(403)
                })
            })
        })

    });
});