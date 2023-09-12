class Home{
    get={
        logInButton:()=> cy.get('[id="loginButton"]').first()
    }
    clickOnLoginButton(){
        this.get.logInButton().should('have.text', 'Iniciar sesión')
        this.get.logInButton().click()
    }
}
export const home = new Home()