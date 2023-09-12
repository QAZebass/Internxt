class Login{
    get={
        emailInput:()=> cy.get('[id="email"]', {timeout:7000}),
        passwordInput:()=> cy.get('[class$="input-primary"]:not(.relative)'),
        logInButton:()=> cy.get('[class*="button-primary"]', {timeout:7000}),

    }
    emailInput(email){
        this.get.emailInput().invoke('attr', 'placeholder').should('equal','Email')
        this.get.emailInput().type(email)
    }
    passwordInput(password){
        this.get.passwordInput().invoke('attr', 'placeholder').should('equal','Password')
        this.get.passwordInput().type(password)
    }
    clickLogIn(){
        this.get.logInButton().should('have.text', 'Iniciar Sesión').click()
    }
    clickUploadFiles(){
        this.get.subirArchivosButton().click()
    }
}
export const login = new Login()