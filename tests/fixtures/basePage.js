const base = require('@playwright/test');
import LoginPage from '../support/pageobjectmodel/pages/login.page';
import FilesPage from '../support/pageobjectmodel/pages/files.page';
import LoginHelper from '../support/pageobjectmodel/helpers/login.helper';
import SpreadsheetPage from '../support/pageobjectmodel/pages/spreadsheet.page';

export const test = base.extend({
    // Define a fixture
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    filesPage: async ({ page }, use) => {
        await use(new FilesPage(page));
    },
    loginHelper: async ({ page }, use) => {
        await use(new LoginHelper(page));
    },
    spreadsheetPage: async ({ page }, use) => {
        await use(new SpreadsheetPage(page));
    },
});
