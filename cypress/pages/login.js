import loginData from '../fixtures/loginData.json';

class LoginPage {
    // elements = {
    //     loginLogo: () => cy.get('.login_logo'),
    //     username: () => cy.get('#user-name'),
    //     password: () => cy.get('#password'),
    //     loginButton: () => cy.get('#login-button'),
    // };
    static visitLoginPage() {
        cy.visit('https://www.saucedemo.com/');
    }
    static verifyAndAssertLoginLogo() {
        // cy.get(loginData.loginLogo).should('be.visible');
        cy.get(loginData.loginLogo).contains('Swag Labs');
    }
    static enterUsername(username) {
        cy.get(loginData.username).should('be.visible');
        cy.get(loginData.username).type(username);
    }

    static enterPassword(password) {
        cy.get(loginData.password).should('be.visible');
        cy.get(loginData.password).type(password);
    }

    static clickLoginButton() {
        cy.get(loginData.loginButton).should('be.visible');
        cy.get(loginData.loginButton).click();
    }
    static assertWithValidCredentials() {
        cy.url().should('include', '/inventory.html');
    }
    static assertWithInvalidCredentials() {
        cy.get(loginData.errormsg).should('be.visible');
        cy.url().should('include', 'saucedemo.com');
        cy.get(loginData.errormsg).contains('Epic sadface: Username and password do not match any user in this service');
    }
    static clickOnMenuButton() {
        cy.get(loginData.menuButton).should('be.visible');
        cy.get(loginData.menuButton).click();
    }
    static clickOnAllItemsButton() {
        cy.get(loginData.allItemsButton).should('be.visible');
        cy.get(loginData.allItemsButton).click();
    }
    static clickOnAboutButton() {
        cy.get(loginData.aboutButton).should('be.visible');
        cy.get(loginData.aboutButton).click();
    }
    static clickOnLogoutButton() {
        cy.get(loginData.logoutButton).should('be.visible');
        cy.get(loginData.logoutButton).click();
    }
    static clickOnResetAppStateButton() {
        cy.get(loginData.resetAppStateButton).should('be.visible');
        cy.get(loginData.resetAppStateButton).click();
    }
    static clickOnCloseMenuButton() {
        cy.get(loginData.closeMenuButton).should('be.visible');
        cy.get(loginData.closeMenuButton).click();
    }
    static assertAboutPage() {
        cy.url().should('include', 'https://saucelabs.com/');
    }
    static assertEmptyLogin() {
        cy.get(loginData.errormsg).should('be.visible');
        cy.url().should('include', 'saucedemo.com');
        cy.get(loginData.errormsg).contains('Epic sadface: Username is required');
    }
}


export default LoginPage;