class Login{
    get={
        emailInput:()=> cy.get('[id="email"]'),
        passwordInput:()=> cy.get('[class$="input-primary"]:not(.relative)'),
        logInButton:()=> cy.get('[class*="button-primary"]'),
        subirArchivosButton:()=> cy.get('button').contains('Subir archivos')

    }
    emailInput(email){
        this.get.emailInput().invoke('attr', 'placeholder').should('equal','Correo electrónico')
        this.get.emailInput().type(email)
    }
    passwordInput(password){
        this.get.passwordInput().invoke('attr', 'placeholder').should('equal','Contraseña')
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