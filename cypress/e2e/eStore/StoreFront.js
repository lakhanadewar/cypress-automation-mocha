describe('Navigate to eStore Homepage and perform logins', () => {
    beforeEach(() => {
        cy.visit("https://lakhanadewar.github.io/stunning-octo.github.io/");
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.get('[data-test="username"]').type("standard_user");
        cy.get('[data-test="password"]').type("secret_sauce");
        cy.xpath('(//*[@id="login-button"] | //*[@data-test="login-button"])').click();
    });


    it('Validate Login and Products label', () => {
        cy.get('.product_label').should('have.text', 'Products');
        cy.get('.product_label').should('have.attr', 'class');
    });

    it('validate product click generic selector', () => {
        cy.get('#item_4_title_link > .inventory_item_name').click();

    });

    it('validate product click with name', () => {
        cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack').click().then((itemName) => {
            console.log("Product Name Clicked: " + itemName.text())
        })

    });

    it('Click on product with xpath', () => {
        cy.xpath('(//*[@class="inventory_item_name"])[1]').should('have.text', 'Sauce Labs Backpack').click();
    });

    it('Counts for the products', () => {
        // cy.get('.inventory_item_label').find('.inventory_item_name').eq(3).click();
        cy.get('.inventory_item').as('countProducts');
        cy.get('@countProducts').should('have.length', 9);
    });

    it('Click product on with find eq', () => {
        // cy.get('.inventory_item_label').find('.inventory_item_name').eq(3).click();
        cy.get('.inventory_item_label .inventory_item_name').eq(2).invoke('text').as('secondPrtName');
        cy.get('@secondPrtName').its('length').should('be.gt', 20);
    });


    it.only('Grab the product price and do the total', () => {
        let sum, i = 1;
        let total;
        cy.get('.pricebar .inventory_item_price').as('proPrice');
        cy.get('@proPrice').each(($el, index, $list) => {

            sum = $el.text().split('$');
            let sum1 = parseFloat(sum);
            total = total + sum1;
        });
    });







    it('Validate Labels on Login', () => {
        cy.visit("https://lakhanadewar.github.io/stunning-octo.github.io/");
        cy.contains('.login_credentials_wrap-inner', 'Accepted usernames are:').find('#login_credentials').should('include.text', 'standard_user');
    })




});