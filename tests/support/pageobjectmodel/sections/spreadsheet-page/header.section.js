import { expect } from '@playwright/test';

export default class SpreadsheetHeader {
    
    constructor(page) {
        this.page = page;
    }

    // Locators
    screenSizePopup = () => this.page.getByText("Features may be limited for small screens and mobile devices");
    popupCloseButton = () => this.page.locator(`.hA-dbtj`);
    spreadsheetTitle = () => this.page.getByText('Spreadsheet');
    renameFileInput = () => this.page.getByText('untitled');
    logoLink = () => this.page.locator(`[href="/"]`);

    

    // Actions
    async clickPopupCloseButton() {
        await this.popupCloseButton().click();
    }

    async fillRenameFileInput() {
        await this.renameFileInput().click();
        await this.renameFileInput().pressSequentially('QA-Wolf-Test');
    }

    async clickLogoLink() {
        await this.logoLink().click();
    }


    // Assertions
    async assertScreenSizePopupVisible() {
        await expect(this.screenSizePopup()).toBeVisible({ timeout: 5000 });
    }

    async assertSpreadsheetTitleVisible() {
        await expect(this.spreadsheetTitle()).toBeVisible({ timeout: 20000 });
    }



}

