import { expect } from '@playwright/test';

export default class LoginForm {
    
    constructor(page) {
        this.page = page;
    }

    // Locators - login form 
    emailInput = () => this.page.locator('[data-test-id="SignInEmail"]');
    passwordInput = () => this.page.locator('[data-test-id="SignInPassword"]');
    loginButton = () => this.page.getByRole('button', { name: 'Log in with email' });

    // Locators - incorrect login error messages
    errorEmailPassword = () => this.page.getByText('Email or password incorrect.');
    errorValidEmail = () => this.page.getByText('Please enter a valid email');
    errorPassword = () => this.page.getByText('Incorrect password');

    // Actions 
    async fillLoginDetails(email, password) {
        await this.emailInput().fill(email);
        await this.passwordInput().fill(password);
    }        

    async clickLoginButton() {
        await this.loginButton().click();
    }

    // Assertions - incorrect login error messages
    async assertErrorEmailPasswordVisible() {
        await expect(this.errorEmailPassword()).toBeVisible({ timeout: 5000 });
    }

    async assertErrorValidEmailVisible() {
        await expect(this.errorValidEmail()).toBeVisible({ timeout: 5000 });
    }

    async assertErrorPasswordVisible() {
        await expect(this.errorPassword()).toBeVisible({ timeout: 5000 });
    }

};