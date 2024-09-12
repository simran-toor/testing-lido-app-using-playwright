import { test } from './fixtures/basePage';

test.describe("sort files in descending order alphabeticaly and by date", () => {
   
    test("files should be sorted in alphabetical decending order", async({ loginHelper, filesPage }) => {
        // launch browser, login, assert files page visible
        await loginHelper.login();

        // takes file names, sorts into reverse alphabetical order and compares to original array
        await filesPage.sortFileNames();
    });

    test("files should be sorted in decending order by date", async({ loginHelper, filesPage }) => {
        // launch browser, login, assert files page visible
        await loginHelper.login();

        // takes file dates, sorts into descending order and compares to original array
        await filesPage.sortFileDates();
    });
    
});




