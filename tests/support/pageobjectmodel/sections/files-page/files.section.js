import { expect } from '@playwright/test';

export default class Files {

    constructor(page) {
        this.page = page;
    }

    // Locators
    fileTableRowsName = () => this.page.locator(`.jHdmZQ`);
    fileTableRowsDate = () => this.page.locator(`.gXtNqV`);
    newFileButton = () => this.page.getByText('New file', { exact: true });
    moreButtonTestFile = () => this.page.locator('div').filter({ hasText: /^QA-Wolf-TestAug 5, 2024Share$/ }).getByRole('button');
    deleteFileButton = () => this.page.getByRole('menu').getByText('Delete');
    deleteFilePopup = () => this.page.getByText('Are you sure you want to');
    deletePopupYesButton = () => this.page.getByText('Yes, I\'m sure');
    testFile = () => this.page.getByText('QA-Wolf-Test');

    // Actions
    async clickNewFileButton() {
        await this.newFileButton().click({ timeout: 5000 });
    }
    
    async clickDeleteButtonTestFile() {
        await this.moreButtonTestFile().click({ timeout: 5000 });
        await this.deleteFileButton().click();
        
    }

    async clickDeletePopupYesButton() {
        await this.deletePopupYesButton().click();
    }
 
    // Assertions 
    async numFileNamesArray() {
        const filesArray = await this.fileTableRowsName().allInnerTexts();
        console.log("current number of files:", filesArray.length);
    }

    async fileNamesArray() {
        const filesArray = await this.fileTableRowsName().allInnerTexts();
        console.log("current files:", filesArray);
        const sortedArrayAsc = filesArray.sort();
        const sortedArrayDsc = sortedArrayAsc.reverse();
        console.log("sorted files:", sortedArrayDsc);
        expect(filesArray).toBe(sortedArrayDsc);
    }

    async fileDatesArray() {
        const fileDatesArray = await this.fileTableRowsDate().allInnerTexts();
        console.log("current dates:", fileDatesArray);
        const sortedArrayDsc = fileDatesArray.sort((a, b) => new Date(b) - new Date(a));
        console.log("sorted dates:" ,sortedArrayDsc);
        expect(fileDatesArray).toBe(sortedArrayDsc);
    };



    async assertTestFileVisible() {
        await expect(this.testFile()).toBeVisible({ timeout: 5000 });
    } 

    async assertTestFileNotVisible() {
        await expect(this.testFile()).not.toBeVisible();
    } 

    async assertDeletePopupVisible() {
        await expect(this.deleteFilePopup()).toBeVisible();
    }




}