describe('Navigate to eStore Homepage and perform logins', () => {
    // beforeEach(() => {
    //     cy.visit("http://localhost:3000");
    //     cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
    //     cy.get('[data-test="username"]').type("standard_user");
    //     cy.get('[data-test="password"]').type("secret_sauce");
    //     cy.get('[data-test="login-button"]').click();
    // });


    it('validte user Password is required error', () => {
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
    });

    // it('Validate Login and Logo', () => {
    //     cy.get('.app_logo').should('have.text', 'Swag Labs');
    //     cy.get('.app_logo').should('have.attr', 'class');
    // });

    // it('validate product click generic selector', () => {
    //     cy.get('#item_4_title_link > .inventory_item_name').click();
    // });

    // it('validate product click with name', () => {
    //     cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack').click();
    // });

    // it('Click on product with xpath', () => {
    //     cy.xpath('(//*[@class="inventory_item_name"])[1]').should('have.text', 'Sauce Labs Backpack').click();
    // });


});