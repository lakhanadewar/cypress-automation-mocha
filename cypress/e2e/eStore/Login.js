///<reference types='cypress'/>

describe('Validate Different logins', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    });

    it('validate login using valid user and password', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]', { force: true }).type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    });

    it('validate login using valid user and invalid password', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_invalid");
        cy.get('[data-test="login-button"]').click();
        cy.get('h3').should('include.text', 'Username and password do not match any user in this service')
    });

    it('validate login using invalid user and valid password', () => {
        cy.get('[data-test="username"]').type("standard_invalid");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('h3').should('include.text', 'Username and password do not match any user in this service')
    });

    it('validate login using invalid user and invalid password', () => {
        cy.get('[data-test="username"]').type("standard_invalid");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('h3').should('include.text', 'Username and password do not match any user in this service')
    });

    it('validate login using valid user and null password', () => {
        cy.get('[data-test="username"]').type("standard_invalid");
        cy.get('[data-test="login-button"]').click();
        cy.get('h3').should('include.text', 'Password is required')
    });

    it('validate login using null user and valid password', () => {
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.get('h3').should('include.text', 'Username is required')
    });


});