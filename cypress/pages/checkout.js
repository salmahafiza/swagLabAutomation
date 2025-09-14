import checkoutData from '../fixtures/checkoutData.json';

class CheckoutPage {
    static goToCart() {
        cy.get(checkoutData.cartIcon).click();
    }

    static clickCheckout() {
        cy.get(checkoutData.checkoutButton).click();
    }

    static fillUserInfo(firstName, lastName, postalCode) {
        cy.get(checkoutData.firstName).type(firstName);
        cy.get(checkoutData.lastName).type(lastName);
        cy.get(checkoutData.postalCode).type(postalCode);
    }

    static clickContinue() {
        cy.get(checkoutData.continueButton).click();
    }

    static assertErrorMessage(message) {
        cy.get(checkoutData.errorMessage).should('contain.text', message);
    }

    static assertSummaryVisible() {
        cy.get(checkoutData.summaryContainer).should('be.visible');
    }

    static clickFinish() {
        cy.get(checkoutData.finishButton).click();
    }

    static assertOrderConfirmation() {
        cy.get(checkoutData.orderConfirmation).should('contain.text', 'THANK YOU FOR YOUR ORDER');
    }

    static clickCancel() {
        cy.get(checkoutData.cancelButton).click();
    }

    static assertCartItemVisible() {
        cy.get(checkoutData.cartItem).should('be.visible');
    }
}

export default CheckoutPage;
