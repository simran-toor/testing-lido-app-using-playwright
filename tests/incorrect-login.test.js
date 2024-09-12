import { test } from './fixtures/basePage';

test.describe("incorrect login combinations", async () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goto();
    });

  
    test("TC1: correct email & incorrect password should display message: Email or password incorrect", async({ loginPage }) => {
        await loginPage.correctEmailIncorrectPassword();
    });

    test("TC2: incorrect email & correct password should display message: Email or password incorrect", async({ loginPage }) => {
        await loginPage.incorrectEmailCorrectPassword();
    });

    test("TC3: incorrect email & incorrect password should display message: Email or password incorrect", async({ loginPage }) => {
        await loginPage.incorrectEmailIncorrectPassword();
    });

    test("TC4: empty email input & empty password input should display message: Please enter a valid email", async({ loginPage }) => {
        await loginPage.emptytEmailEmptyPassword();
    });

    test("TC5: correct email input & empty password input should display message: Incorrect password", async({ loginPage }) => {
        await loginPage.correctEmailEmptyPassword();
    });

    test("TC6: incorrect email & empty password input should display message: Incorrect password", async({ loginPage }) => {
        await loginPage.incorrectEmailEmptyPassword();
    });

    test("TC7: empty email input & correct password should display message: Please enter a valid email", async({ loginPage }) => {
        await loginPage.emptyEmailCorrectPassword();
    });

    test("TC8: empty email input & incorrect password should display message: Please enter a valid email", async({ loginPage }) => {
        await loginPage.emptyEmailCorrectPassword();
    });

});