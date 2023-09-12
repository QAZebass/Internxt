class Home{
    get={
        logInButton:()=> cy.get('[id="loginButton"]:not(.flex)')
    }
    clickOnLoginButton(){
        this.get.logInButton().should('have.text', 'Iniciar sesión')
        this.get.logInButton().click()
    }
}
export const home = new Home()