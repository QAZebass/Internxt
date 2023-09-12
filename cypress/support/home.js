import 'cypress-wait-until'
class Home{
    get={
        logInButton:()=> cy.get('button').contains('Log in')
    }
    clickOnLoginButton(){
        cy.waitUntil(()=>
        this.get.logInButton().should('have.text', 'Log in')).then((el)=>{
            el.click()
        })

        
    }
}
export const home = new Home()