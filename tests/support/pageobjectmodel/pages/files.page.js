import TopNavbar from '../sections/files-page/topNavbar.section';
import Files from '../sections/files-page/files.section';

export default class FilesPage {

    constructor(page) {
        this.page = page;
        this.topNavbar = new TopNavbar(this.page);
        this.files = new Files(this.page);
    }

    async filesPageLoaded(){
        await this.topNavbar.assertNavbarUserMenuButtonVisible();
    }

    async logout(){
        await this.topNavbar.clickLogoutButton();
    }

    async noOfFilesVisible() {
        await this.files.numFileNamesArray();
    }

    async sortFileNames() {
        await this.files.fileNamesArray();
    }

    async sortFileDates() {
        await this.files.fileDatesArray();
    }

    async createNewFile() {
        await this.files.clickNewFileButton();
    }

    async testFileVisible() {
        await this.files.assertTestFileVisible();
    }

    async testFileNotVisible() {
        await this.files.assertTestFileNotVisible();
    }

    async deleteFile() {
        await this.files.clickDeleteButtonTestFile();
        await this.files.assertDeletePopupVisible();
        await this.files.clickDeletePopupYesButton();
    }


};