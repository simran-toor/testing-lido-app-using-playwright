import { test } from './fixtures/basePage';

test.describe.configure({ mode: 'serial' });

test.describe("create and delete a file", () => {
    
    test("should create test file", async ({ loginHelper, filesPage, spreadsheetPage }) => {
        test.setTimeout(120000);
        // launches browser, logins user, asserts files page is visible
        await loginHelper.login();

        // // clean up - check if "QA-Wolf-Test" already exists, if yes delete file 
        // try {
        //     await filesPage.testFileVisible();
        // } catch (e) {
        //     if (e) {
        //         await filesPage.deleteFile();
        //         await filesPage.testFileNotVisible();
        //         console.log("unwanted test file deleted"); 
        //     }
        // }

        // console logs current number of files displayed        
        await filesPage.noOfFilesVisible();
        // click on create new file button
        await filesPage.createNewFile();
        // asserts spreadsheet page is visible, renames file to "QA-Wolf-test", and navigate back to files page
        await spreadsheetPage.renameFile();
        // assert files page is visible
        await filesPage.filesPageLoaded();
        //assert new test file is visible and console logs current number of files displayed        
        await filesPage.testFileVisible();
        await filesPage.noOfFilesVisible();
    });

    test("should delete test file", async({ loginHelper, filesPage }) => {
        // launches browser, logins user, asserts files page is visible
        await loginHelper.login();        
        //assert new test file is visible and console logs current number of files displayed        
        await filesPage.testFileVisible();
        await filesPage.noOfFilesVisible();
        // delete file
        await filesPage.deleteFile();
        // assert test file is not visible and console.log current number of files
        await filesPage.testFileNotVisible();
        await filesPage.noOfFilesVisible();
    });
});

