import loginPage from '../../pages/login';
import PLPPage from '../../pages/PLPPage';
import PDPPage from '../../pages/PDPPage';

describe('Product Detail Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        loginPage.assertWithValidCredentials();
        PLPPage.clickOnProduct(0); // Go to PDP
    });

    it('TC_PDP_01 - should display product details', () => {
        PDPPage.assertProductDetailsVisible();
    });

    it('TC_PDP_02 - should add product to cart from PDP', () => {
        PDPPage.addToCart();
        PDPPage.assertCartBadgeCount('1');
    });

    it('TC_PDP_03 - should remove product from cart from PDP', () => {
        PDPPage.addToCart();
        PDPPage.removeFromCart();
        cy.get('body').then(($body) => {
            if ($body.find('.shopping_cart_badge').length > 0) {
                cy.get('.shopping_cart_badge').should('not.exist');
            }
        });
    });

    it('TC_PDP_04 - should navigate back to PLP', () => {
        PDPPage.clickBackToProducts();
        cy.url().should('include', '/inventory.html');
    });

    it('TC_PDP_05 - should show correct product name and description', () => {
        PDPPage.assertProductDetailsVisible();
        cy.get(pdpData.productTitle).should('contain.text', 'Sauce Labs'); // sample check
    });

    it('TC_PDP_06 - should show correct product price format', () => {
        cy.get(pdpData.productPrice).invoke('text').should('match', /^\$/);
    });

    it('TC_PDP_07 - should add multiple products via PDP', () => {
        PDPPage.addToCart();
        PDPPage.clickBackToProducts();
        PLPPage.clickOnProduct(1);
        PDPPage.addToCart();
        PDPPage.assertCartBadgeCount('2');
    });

    it('TC_PDP_08 - should persist cart when navigating back', () => {
        PDPPage.addToCart();
        PDPPage.clickBackToProducts();
        PLPPage.assertCartBadgeCount('1');
    });

    it('TC_PDP_09 - should load product image correctly', () => {
        cy.get(pdpData.productImage).should('be.visible').and(($img) => {
            expect($img[0].naturalWidth).to.be.greaterThan(0);
        });
    });

    it('TC_PDP_10 - should allow navigation between PDPs', () => {
        PDPPage.clickBackToProducts();
        PLPPage.clickOnProduct(1);
        PDPPage.assertProductDetailsVisible();
    });
});
