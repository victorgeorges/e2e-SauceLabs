
// to call a class-> .
describe('', () => {
    it('Inventory Info Validation', ()=>{
        //enter in the index page
        cy.loginDone()      
        cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
        .should('contain.text' , 'Sauce Labs Backpack')
        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
        .should('contain.text' , '$29.99')
    });
    it('Shoppig Cart Validation', ()=>{
        //enter in the index page
        cy.loginDone()      
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('be.visible').click()
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible')
        //validando compra adicionada
        cy.get('.shopping_cart_badge').should('be.visible').and('have.to', '1')
        //validando carrinho nao visivel
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').click()
        //.should('not.match', /\d/) - Checks that the text of the element does not contain any digits. The regular expression \d matches any digit (0-9).
        cy.get('[data-test="shopping-cart-link"]').should('not.match', /\d/);
    });
})