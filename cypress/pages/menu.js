import menuItems from '../fixtures/menuData.json';
class MenuPage {
    static clickOnMenuButton() {
        cy.get(menuItems.menuButton).should('be.visible');
        cy.get(menuItems.menuButton).click();
    }
    static clickOnAllItemsButton() {
        cy.get(menuItems.allItemsButton).should('be.visible');
        cy.get(menuItems.allItemsButton).click();
    }
    static clickOnAboutButton() {
        cy.get(menuItems.aboutButton).should('be.visible');
        cy.get(menuItems.aboutButton).click();
    }
    static assertAboutPage() {
        cy.url().should('include', 'https://saucelabs.com/');
    }
    static clickOnLogoutButton() {
        cy.get(menuItems.logoutButton).should('be.visible');
        cy.get(loginData.logoutButton).click();
    }
    static clickOnResetAppStateButton() {
        cy.get(menuItems.resetAppStateButton).should('be.visible');
        cy.get(menuItems.resetAppStateButton).click();
    }
    static clickOnCloseMenuButton() {
        cy.get(menuItems.closeMenuButton).should('be.visible');
        cy.get(menuItems.closeMenuButton).click();
    }
    static assertAboutPage() {
        cy.url().should('include', 'https://saucelabs.com/');
    }
    static clickBurgerMenu() {
        cy.get(menuItems.burgerMenu).click();
    }

    static openCart() {
        cy.get(menuItems.cartButton).click();
    }

    static assertCartCount(count) {
        cy.get(menuItems.cartBadge).should('have.text', count);
    }

    static selectSort(option) {
        cy.get(menuItems.sortDropdown).select(option);
    }

    static addBackpackToCart() {
        cy.get(menuItems.addToCartBackpack).click();
    }

    static removeBackpackFromCart() {
        cy.get(menuItems.removeBackpack).click();
    }

    static assertInventoryItemsVisible() {
        cy.get(menuItems.inventoryItem).should('have.length.greaterThan', 0);
    }

    static assertFirstItemName(expectedName) {
        cy.get(menuItems.itemName).first().should('contain.text', expectedName);
    }

    static assertFirstItemPrice(expectedPrice) {
        cy.get(menuItems.itemPrice).first().should('contain.text', expectedPrice);
    }

}
export default MenuPage;