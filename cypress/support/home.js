import 'cypress-wait-until'
class Home{
    get={
        logInButton:()=> cy.get('button').contains('Iniciar sesión')
    }
    clickOnLoginButton(){
        cy.waitUntil(()=>
        this.get.logInButton().should('have.text', 'Iniciar sesión')).then((el)=>{
            el.click()
        })

        
    }
}
export const home = new Home()