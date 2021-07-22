Cypress.Commands.add('login', (usuario, senha) => { 
    cy.request({
        method: "POST",
        url: '/login',
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        body: {
            email: usuario,
            password: senha
        },
        failOnStatusCode: false
    })
})