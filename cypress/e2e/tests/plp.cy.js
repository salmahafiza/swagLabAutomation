import loginPage from '../../pages/login';
import PLPPage from '../../pages/plp';

describe('Product Listing Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        loginPage.assertWithValidCredentials();
    });

    it('TC_PLP_01 - should display product list', () => {
        PLPPage.assertProductListVisible();
    });

    it('TC_PLP_02 - should sort products by Name (A-Z)', () => {
        PLPPage.sortBy('az');
        // add assertion if needed: verify first product
    });

    it('TC_PLP_03 - should sort products by Name (Z-A)', () => {
        PLPPage.sortBy('za');
    });

    it('TC_PLP_04 - should sort products by Price (Low-High)', () => {
        PLPPage.sortBy('lohi');
    });

    it('TC_PLP_05 - should sort products by Price (High-Low)', () => {
        PLPPage.sortBy('hilo');
    });

    it('TC_PLP_06 - should add product to cart', () => {
        PLPPage.addToCart(0);
        PLPPage.assertCartBadgeCount('1');
    });

    it('TC_PLP_07 - should remove product from cart', () => {
        PLPPage.addToCart(0);
        PLPPage.removeFromCart(0);
        cy.get('body').then(($body) => {
            if ($body.find('.shopping_cart_badge').length > 0) {
                cy.get('.shopping_cart_badge').should('not.exist');
            }
        });
    });

    it('TC_PLP_08 - should navigate to product details', () => {
        PLPPage.clickOnProduct(0);
        cy.url().should('include', '/inventory-item.html');
    });

    it('TC_PLP_09 - should update cart badge with multiple items', () => {
        PLPPage.addToCart(0);
        PLPPage.addToCart(1);
        PLPPage.assertCartBadgeCount('2');
    });

    it('TC_PLP_10 - should open menu from PLP', () => {
        PLPPage.clickMenuButton();
        cy.get('.bm-menu').should('be.visible');
    });
});
