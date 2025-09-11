import MenuPage from "../../pages/menu";
import loginPage from "../../pages/login";

beforeEach(() => {
    loginPage.visitLoginPage();
    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLoginButton();

});
it('should open the menu when the menu button is clicked', () => {
    MenuPage.clickOnMenuButton();
});
it('should navigate to the All Items page when the All Items button is clicked', () => {
    MenuPage.clickOnMenuButton();
    MenuPage.clickOnAllItemsButton();
    cy.url().should('include', '/inventory.html');
});
// it('should navigate to the About page when the About button is clicked', () => {
//     MenuPage.clickOnMenuButton();
//     MenuPage.clickOnAboutButton();
//     MenuPage.assertAboutPage();
// });
it('Verify inventory items are visible', () => {
    MenuPage.assertInventoryItemsVisible();
  });

  it('Add Backpack to cart', () => {
    MenuPage.addBackpackToCart();
    MenuPage.assertCartCount('1');
  });

  it('Sort items by Price (low to high)', () => {
    MenuPage.selectSort('Price (low to high)');
    MenuPage.assertFirstItemPrice('$7.99');
  });

  it('Open cart and check items', () => {
    MenuPage.addBackpackToCart();
    MenuPage.openCart();
    cy.url().should('include', '/cart.html');
  });


