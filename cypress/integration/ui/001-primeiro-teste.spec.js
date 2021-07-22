/// <reference types="cypress" />

context('Validar menus', () => {

    it('clicando no link comprar deve direcionar para a página de compra', () => {
        cy.visit('http://lojaebac.ebaconline.art.br')
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.contains('Produtos')
        cy.url().contains('/shop')
    });
    
});