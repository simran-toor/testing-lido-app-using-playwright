import { test } from './fixtures/basePage';

test("should logout user", async({ loginHelper, filesPage, loginPage }) => {
    await loginHelper.login();
    await filesPage.logout();
    await loginPage.loginPageLoaded();
});
