import 'cypress-wait-until'
class Home{
    get={
        logInButton:()=> cy.get('[id="loginButton"]:not(.flex)', {timeout:10000})
    }
    clickOnLoginButton(){
        cy.waitUntil(()=>
        this.get.logInButton().should('have.text', 'Iniciar sesión')).then((el)=>{
            el.click()
        })

        
    }
}
export const home = new Home()