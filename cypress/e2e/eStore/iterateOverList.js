///<reference types='cypress'/>

describe('Product validating', () => {

    beforeEach(() => {
        cy.visit("https://lakhanadewar.github.io/stunning-octo.github.io/");
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.xpath('(//*[@id="login-button"] | //*[@data-test="login-button"])').click();
    });


    it('Iterate over all products and log names with index', () => {
        cy.get('#inventory_container .inventory_item_name').each(($el, index, $list) => {
            cy.log("The product on Index " + index + " with name of : " + $el.text());

        })
    });

    it.only('Iterate over all products and click on one specific item', () => {
        cy.get('#inventory_container .inventory_item_name').each(($el, index, $list) => {
            cy.log("The product on Index " + index + " with name of : " + $el.text());
            if ($el.text().includes('Sauce Labs Onesie')) {
                cy.wrap($el).click();
            } else {
                cy.log("Unable to Find the product name " + $el.text())
            }
        })
    });
});

