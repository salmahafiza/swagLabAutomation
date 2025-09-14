import plpData from '../fixtures/plpData.json';

class PLPPage {
    static assertProductListVisible() {
        cy.get(plpData.productTitle).should('be.visible');
        cy.get(plpData.productImage).should('be.visible');
    }

    static sortBy(option) {
        cy.get(plpData.sortDropdown).select(option);
    }

    static addToCart(index = 0) {
        cy.get(plpData.addToCartButton).eq(index).click();
    }

    static removeFromCart(index = 0) {
        cy.get(plpData.removeButton).eq(index).click();
    }

    static assertCartBadgeCount(count) {
        cy.get(plpData.cartBadge).should('have.text', count);
    }

    static clickOnProduct(index = 0) {
        cy.get(plpData.productTitle).eq(index).click();
    }

    static clickMenuButton() {
        cy.get(plpData.menuButton).click();
    }
}

export default PLPPage;
