/// <reference types="cypress" />

context('Login', () => {
    let usuarioPadrao
    
    before(() => {
        cy.fixture('api/users').then(data => {
            usuarioPadrao = data
        })
    });

    it('com usuário válido do json retorna o token de autorização', () => {
        // let token
        // cy.login(usuarioPadrao.email, usuarioPadrao.password).then( responseToken => {
        //     token = responseToken.authorization
        // })
        // expect(token).to.exist

        cy.login(usuarioPadrao.email, usuarioPadrao.password).then( responseToken => {
            expect(responseToken.body.authorization).to.exist
        })

    });

    it('selecionando usuário admin da listagem retorna o token de autorização', () => {
        cy.listarUsuarios().then(listaDeUsuarios => {
            expect(listaDeUsuarios.body.usuarios).to.have.lengthOf(listaDeUsuarios.body.quantidade)
            const admin_user = listaDeUsuarios.body.usuarios.filter((user, index, array) => user.administrador == 'true')
            cy.login(admin_user[0].email, admin_user[0].password).then( responseToken => {
                expect(responseToken.body.authorization).to.exist
            })
        })

    });
});