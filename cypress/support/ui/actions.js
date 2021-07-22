Cypress.Commands.add('login', (usuario, senha) => { 
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha)
    cy.get('.woocommerce-form > .button').click()
})

Cypress.Commands.add('erroUsuarioNaoLogado', () => { 
    cy.get('.woocommerce-error > li')
})

Cypress.Commands.add('mensagemBoasVindas', () => { 
    cy.get('a > .hidden-xs')
})
