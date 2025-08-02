import MenuPage from "../../pages/menu";
import loginPage from "../../pages/login";

beforeEach(() => {
    loginPage.visitLoginPage();
});
    it('should open the menu when the menu button is clicked', () => {
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        MenuPage.clickOnMenuButton();
    });
