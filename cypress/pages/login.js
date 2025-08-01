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
    static verifyAndAssertLoginLogo(){
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
        cy.get(loginData.errorMessage).should('be.visible');
        cy.get(loginData.errorMessage).contains('Epic sadface: Username and password do not match any user in this service');
    }



}
export default LoginPage;