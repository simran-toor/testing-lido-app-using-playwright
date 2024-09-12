import { expect } from '@playwright/test';

export default class TopNavbar {

    constructor(page) {
        this.page = page;
    }

    // Locators
    navbarUserMenuButton = () => this.page.getByRole('button', { name: 'qa-st-test@maildrop.cc' });
    logOutButton = () => this.page.getByText('Log out');
    
    // Actions 
    async clickLogoutButton() {
        await this.navbarUserMenuButton().click();
        await this.logOutButton().click();
    }

    // Assertions
    async assertNavbarUserMenuButtonVisible() {
        await expect(this.navbarUserMenuButton()).toBeVisible({ timeout: 20000 });
    } 
};