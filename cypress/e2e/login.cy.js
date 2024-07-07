//import './commands.js'
//test context
describe ('Login' , ()=>{
    it('Success Login', ()=>{
        //Arrange
        cy.visitSite()
        //Act   
        cy.get('[data-test="username"]').should('be.visible').type('standard_user')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.url().should('eq','https://www.saucedemo.com/inventory.html')
        //${visitSite()} -didn't done
        
    })
    it('Without username', () => {
        cy.visitSite()

        cy.get('[data-test="username"]').should('be.visible').type('teste')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.get('.error-message-container').should('contain','Epic sadface: Password is required')
        cy.url().should('eq','https://www.saucedemo.com/')
    });
    it('Without password', () => {
        cy.visit('https://www.saucedemo.com')

        cy.get('[data-test="username"]').should('be.visible').type('teste')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.get('.error-message-container').should('contain','Epic sadface: Password is required')
        cy.url().should('eq','https://www.saucedemo.com/')
    });
    it('Wrong username', () => {
        cy.visit('https://www.saucedemo.com')

        cy.get('[data-test="username"]').should('be.visible').type('teste')
        cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.get('.error-message-container').should('contain','Epic sadface: Username and password do not match any user in this service')

        cy.url().should('eq','https://www.saucedemo.com/')
    });
    it('Wrong password', () => {
        cy.visit('https://www.saucedemo.com')

        cy.get('[data-test="username"]').should('be.visible').type('standard_user')
        cy.get('[data-test="password"]').should('be.visible').type('teste')
        cy.get('[data-test="login-button"]').should('be.visible').click()
        cy.url().should('eq','https://www.saucedemo.com/')
    });
}) 

