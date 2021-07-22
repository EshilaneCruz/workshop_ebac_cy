class MinhaContaPage{

    getUsuarioLogado(){
        return cy.get('a > .hidden-xs')
    }

}
export default new MinhaContaPage()