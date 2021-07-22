Cypress.Commands.add('listarUsuarios', () => { 
    cy.request({
        method: "GET",
        url: '/usuarios',
        headers: {
            accept: "application/json",
            "content-type": "application/json"
        },
        failOnStatusCode: false
    })
})