import { test } from './fixtures/basePage';

test("should login user", async({ loginPage, filesPage }) => {
    await loginPage.goto();
    await loginPage.loginPageLoaded();
    await loginPage.loginWithEmail();
    await filesPage.filesPageLoaded();
});
