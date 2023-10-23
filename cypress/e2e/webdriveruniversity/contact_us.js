///<reference types="cypress"/>
describe("contact us page submission", () => {

    const url = "http://www.webdriveruniversity.com";

    it.only("Submit contact us with are required data", () => {
        cy.visit(url);
        cy.get('#contact-us').invoke('removeAttr', 'target').click().then((btnName) => {
            console.log('Text on the button: ' + btnName.text());
        });
        cy.get('[name="first_name"]').type("Ethan");
        cy.get('[name="last_name"]').type("Hunt");
        cy.get('[name="email"]').type("ethan.hunt@example.com");
        cy.get('[name="message"]').type("Hello How are you?");
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!');
        cy.get('#contact_reply').should('have.id', 'contact_reply')
    })

    // it("Submit contact us without email field", () => {

    // })




})