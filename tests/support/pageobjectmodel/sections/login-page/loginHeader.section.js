import { expect } from '@playwright/test';

export default class LoginHeader {
    
    constructor(page) {
        this.page = page;
    }

    // Locators
    loginHeader = () => this.page.getByText('Log in', { exact: true });

    // Assertions
    async assertLoginHeaderVisible() {
        await expect(this.loginHeader()).toBeVisible({ timeout: 10000 });
    }
};