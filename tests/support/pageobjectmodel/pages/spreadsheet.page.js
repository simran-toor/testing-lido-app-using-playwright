import SpreadsheetHeader from "../sections/spreadsheet-page/header.section";

export default class SpreadsheetPage {

    constructor(page) {
        this.page = page;
        this.spreadsheetHeader = new SpreadsheetHeader(this.page);
    }

    async popup() {
        try{
            await this.spreadsheetHeader.assertScreenSizePopupVisible();
        } catch {
            await this.spreadsheetHeader.clickPopupCloseButton();
        }
    }

    async renameFile() {
        await this.spreadsheetHeader.assertSpreadsheetTitleVisible();
        await this.spreadsheetHeader.fillRenameFileInput();        
        await this.spreadsheetHeader.clickLogoLink();
    }
}