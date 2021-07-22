/// <reference types="cypress" />

context('Validar menus', () => {

    it('clicando no link comprar deve direcionar para a página de compra', () => {
        cy.visit('http://lojaebac.ebaconline.art.br')

        //REPETINDO O SELETOR
        //cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar')
        //cy.get('#primary-menu > .menu-item-629 > a').click()

        //COMBINANDO AÇÕES
        //cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar').and('have.attr', 'href').and('include', '/shop')
        //cy.get('#primary-menu > .menu-item-629 > a').contains('Comprar').click()

        //ALIAS
        cy.get('#primary-menu > .menu-item-629 > a').as('comprarLinkMenu')
        cy.get('@comprarLinkMenu').contains('Comprar').and('have.attr', 'href').and('include', '/shop')
        cy.get('@comprarLinkMenu').click()

        //POR QUÊ USAR SHOULD? PORQUE CONTAINS É UMA ASSERTION ESPECÍFICA, ENTÃO O IDEAL
        //É MANTER UMA PADRONIZAÇÃO NO CÓDIGO UTILIZANDO SHOULD PARA AS ASSERÇÕES GERAIS
        cy.get('.page-title').should('contain', 'Produtos')
        cy.url().should('contain', '/shop')
    });
    
});