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
        static assertAboutPage(){
            cy.url().should('include', 'https://saucelabs.com/');
        }
    }
export default MenuPage;