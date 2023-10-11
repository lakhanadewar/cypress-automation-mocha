///<reference types="cypress"/>
describe("contact us page submission", () => {

    const url = "http://www.webdriveruniversity.com/";

    it("Submit contact us with are required data", () => {
        cy.visit(url);
        cy.get('#contact-us').invoke('removeAttr', 'target').click();
        cy.get('[name="first_name"]').type("Ethan");
        cy.get('[name="last_name"]').type("Hunt");
        cy.get('[name="email"]').type("ethan.hunt@example.com");
        cy.get('[name="message"]').type("Hello How are you?");
        cy.get('[type="submit"]').click();
        cy.get('h1').contains("Thank You for your Message!");
    })

    // it("Submit contact us without email field", () => {

    // })




})