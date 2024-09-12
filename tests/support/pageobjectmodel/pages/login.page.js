import LoginForm from '../sections/login-page/loginForm.section';
import LoginHeader from '../sections/login-page/loginHeader.section';

export default class LoginPage {

    constructor(page) {
        this.page = page;
        this.loginForm = new LoginForm(this.page);
        this.loginHeader = new LoginHeader(this.page);
    }

    // Navigation
    async goto(){
        await this.page.goto("https://sheets.lido.app/login");
    }

    // Actions
    async loginWithEmail() {
        await this.loginForm.fillLoginDetails(process.env.EMAIL, process.env.PASSWORD);
        await this.loginForm.clickLoginButton();
    }

    // Actions + Assertions - Incorrect login
    // TC1
    async correctEmailIncorrectPassword() {
        await this.loginForm.fillLoginDetails(process.env.EMAIL, process.env.INCORRECT_PASSWORD);
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorEmailPasswordVisible();

    }
    // TC2
    async incorrectEmailCorrectPassword() {
        await this.loginForm.fillLoginDetails(process.env.INCORRECT_EMAIL, process.env.PASSWORD);
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorEmailPasswordVisible();
    }
    // TC3
    async incorrectEmailIncorrectPassword() {
        await this.loginForm.fillLoginDetails(process.env.INCORRECT_EMAIL, process.env.INCORRECT_PASSWORD);
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorEmailPasswordVisible();
    }
    // TC4
    async emptytEmailEmptyPassword() {
        await this.loginForm.fillLoginDetails("", "");
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorValidEmailVisible();
    }
    // TC5
    async correctEmailEmptyPassword() {
        await this.loginForm.fillLoginDetails(process.env.EMAIL, "");
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorPasswordVisible();
    }
    // TC6
    async incorrectEmailEmptyPassword() {
        await this.loginForm.fillLoginDetails(process.env.INCORRECT_EMAIL, "");
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorPasswordVisible();
    }
    // TC7
    async emptyEmailCorrectPassword() {
        await this.loginForm.fillLoginDetails("", process.env.PASSWORD);
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorValidEmailVisible();
    }
    // TC8
    async emptyEmailCorrectPassword() {
        await this.loginForm.fillLoginDetails("", process.env.INCORRECT_PASSWORD);
        await this.loginForm.clickLoginButton();
        await this.loginForm.assertErrorValidEmailVisible();
    }
    
    // Assertions
    async loginPageLoaded() {
        await this.loginHeader.assertLoginHeaderVisible();
    }

};