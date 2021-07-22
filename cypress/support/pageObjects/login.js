class LoginPage {
    login(usuario, senha) {
        cy.get('#username').type(usuario)
        cy.get('#password').type(senha)
        cy.get('.woocommerce-form > .button').click()
    }

    getUsuarioNaoCadastradoErrorMessage() {
        return cy.get('.woocommerce-error > li')
    }
}
export default new LoginPage()