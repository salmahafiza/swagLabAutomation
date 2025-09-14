import pdpData from '../fixtures/pdpData.json';

class PDPPage {
    static assertProductDetailsVisible() {
        cy.get(pdpData.productTitle).should('be.visible');
        cy.get(pdpData.productDescription).should('be.visible');
        cy.get(pdpData.productPrice).should('be.visible');
        cy.get(pdpData.productImage).should('be.visible');
    }

    static addToCart() {
        cy.get(pdpData.addToCartButton).click();
    }

    static removeFromCart() {
        cy.get(pdpData.removeButton).click();
    }

    static assertCartBadgeCount(count) {
        cy.get(pdpData.cartBadge).should('have.text', count);
    }

    static clickBackToProducts() {
        cy.get(pdpData.backToProducts).click();
    }
}

export default PDPPage;
