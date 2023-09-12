import data from '../fixtures/staticData'
import { home } from '../support/home'
import { login } from '../support/login'
import { app } from '../support/profileapp'
import { removeLogs } from './removeLogs/removelogs'
describe('REP-14-internxt-login-log-in-the-website',()=>{
    before('Preconditions',()=>{
        cy.visit('/')
        cy.url().should('equal', data.urls.home)
    })
    it('REP-15 | TC1: Validate the user can log in successfully',()=>{
        home.clickOnLoginButton()
        login.emailInput(data.userCredentials.email)
        login.passwordInput(data.userCredentials.password)
        login.clickLogIn()
        cy.url().should('equal', data.urls.app)
    })
})
removeLogs()