/// <reference types="cypress" />

import LoginPage from '../../support/pageObjects/login'
import MinhaContaPage from '../../support/pageObjects/minhaConta'
const profile = require('../../fixtures/ui/profile.json')

context('Login', () => {
    
    //let profile
    const NOT_REGISTERED_ERROR_MESSAGE = 'Nome de usuário desconhecido. Verifique novamente ou tente seu endereço de e-mail.'
    const WELCOME_MESSAGE = 'Welcome Eshi Cruz !'

    // before('', () => {
    //     cy.fixture('../fixtures/profile').then((data) => {
    //         profile = data
    //     })
    // })

    beforeEach('', () => {
        cy.visit('/my-account-2/')
    })

    it('com usuário cadastrado redireciona para a página de Minha Conta', () => {
        // DADOS NO CENÁRIO
        // cy.get('#username').type('eshi')
        // cy.get('#password').type('teste@123')

        // DADOS CONST/FIXTURE
        // cy.get('#username').type(profile.usuarioCadastrado.usuario)
        // cy.get('#password').type(profile.usuarioCadastrado.senha)
        // cy.get('.woocommerce-form > .button').click()
        // cy.get('a > .hidden-xs').should('contain', 'Welcome Eshi Cruz !')

        // PAGEOBJECTS
        // LoginPage.login(profile.usuarioCadastrado.usuario, profile.usuarioCadastrado.senha)
        // MinhaContaPage.getUsuarioLogado().should('contain', 'Welcome Eshi Cruz !')

        // COMMANDS - UTILIZAR COMMANDS NÃO CARACTERIZA O USO DE APP ACTIONS!!!
        cy.login(profile.usuarioCadastrado.usuario, profile.usuarioCadastrado.senha)
        cy.mensagemBoasVindas().should('contain', WELCOME_MESSAGE)
    });

    //EXERCÍCIO
    it('com usuário não cadastrado informa que o usuário não está cadastrado', () => {
        // INCLUIR UM USUÁRIO NÃO CADASTRADO NO JSON FILE
        // TENTAR FAZER O LOGIN E VERIFICAR QUE EXIBIU A MENSAGEM DE USUÁRIO NÃO CADASTRADO
        cy.login(profile.usuarioNaoCadastrado.usuario, profile.usuarioNaoCadastrado.senha)
        cy.erroUsuarioNaoLogado().should('contain', NOT_REGISTERED_ERROR_MESSAGE)
        
    });
})