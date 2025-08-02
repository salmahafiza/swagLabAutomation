import loginPage from '../../pages/login';

//const loginPage = new LoginPage();
describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    it('should display the login logo', () => {
        loginPage.verifyAndAssertLoginLogo();
    });

    it('should login with valid credentials', () => {
        loginPage.enterUsername('standard_user');
        loginPage.enterPassword('secret_sauce');
        loginPage.clickLoginButton();
        loginPage.assertWithValidCredentials();
    });

    it('should not login with invalid credentials', () => {
        loginPage.enterUsername('invalid_user');
        loginPage.enterPassword('invalid_password');
        loginPage.clickLoginButton();
        loginPage.assertWithInvalidCredentials();

    });
    it('should not login with empty credentials', () => {
        loginPage.enterUsername('');
        loginPage.enterPassword('');
        loginPage.clickLoginButton();
        loginPage.assertWithInvalidCredentials();
    });



});
