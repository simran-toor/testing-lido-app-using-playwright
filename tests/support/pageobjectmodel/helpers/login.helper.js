import LoginPage from '../pages/login.page';
import FilesPage from '../pages/files.page';

export default class LoginHelper {
    
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.filesPage = new FilesPage(this.page);
    }

    async login() {
        // naviagte to login page
        await this.loginPage.goto();
        await this.loginPage.loginPageLoaded();
        // login and assert logged in
        await this.loginPage.loginWithEmail();
        await this.filesPage.filesPageLoaded();
    }
};