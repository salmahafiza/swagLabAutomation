import loginPage from '../../pages/login';
import PLPPage from '../../pages/PLPPage';
import CheckoutPage from '../../pages/CheckoutPage';

describe('Checkout Flow Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        loginPage.assertWithValidCredentials();

        // Add product and go to checkout start
        PLPPage.addToCart(0);
        CheckoutPage.goToCart();
        CheckoutPage.clickCheckout();
    });

    it('TC_CO_01 - should show error for empty first name', () => {
        CheckoutPage.clickContinue();
        CheckoutPage.assertErrorMessage('Error: First Name is required');
    });

    it('TC_CO_02 - should show error for empty last name', () => {
        CheckoutPage.fillUserInfo('John', '', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.assertErrorMessage('Error: Last Name is required');
    });

    it('TC_CO_03 - should show error for empty postal code', () => {
        CheckoutPage.fillUserInfo('John', 'Doe', '');
        CheckoutPage.clickContinue();
        CheckoutPage.assertErrorMessage('Error: Postal Code is required');
    });

    it('TC_CO_04 - should continue with valid user info', () => {
        CheckoutPage.fillUserInfo('John', 'Doe', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.assertSummaryVisible();
    });

    it('TC_CO_05 - should display cart items in overview page', () => {
        CheckoutPage.fillUserInfo('John', 'Doe', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.assertCartItemVisible();
    });

    it('TC_CO_06 - should allow cancel checkout and return to cart', () => {
        CheckoutPage.clickCancel();
        cy.url().should('include', '/cart.html');
    });

    it('TC_CO_07 - should complete checkout with Finish', () => {
        CheckoutPage.fillUserInfo('John', 'Doe', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.clickFinish();
        CheckoutPage.assertOrderConfirmation();
    });

    it('TC_CO_08 - should redirect back to products after order', () => {
        CheckoutPage.fillUserInfo('John', 'Doe', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.clickFinish();
        cy.get('#back-to-products').click();
        cy.url().should('include', '/inventory.html');
    });

    it('TC_CO_09 - should persist cart badge count until checkout complete', () => {
        CheckoutPage.fillUserInfo('John', 'Doe', '12345');
        CheckoutPage.clickContinue();
        cy.get('.shopping_cart_badge').should('have.text', '1');
    });

    it('TC_CO_10 - should clear cart after successful checkout', () => {
        CheckoutPage.fillUserInfo('John', 'Doe', '12345');
        CheckoutPage.clickContinue();
        CheckoutPage.clickFinish();
        CheckoutPage.assertOrderConfirmation();
        cy.get('.shopping_cart_badge').should('not.exist');
    });
});
