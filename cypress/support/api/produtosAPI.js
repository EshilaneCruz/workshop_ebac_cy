Cypress.Commands.add('cadastrarProduto', (token, bodyData) => { 
    cy.request({
        method: "POST",
        url: '/produtos',
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: token
        },
        body: bodyData,
        failOnStatusCode: false
    })
})