import {Page, Locator, expect} from '@playwright/test'
import {loginPageData} from './LoginPageLocators'

export  class Loginpage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
        
    }
    async login(username, password) {
        await this.page.locator(loginPageData.usernameInput).fill(username);
        await this.page.locator(loginPageData.passwordInput).fill(password);
        await this.page.locator(loginPageData.submitButton).click();
        await this.page.waitForSelector('.oxd-topbar-header-breadcrumb');
    }
    async verifyLogin() {
        await this.page.waitForSelector('a#welcome');
        const text = await this.page.textContent('a#welcome');
        await expect(text).toContain('Welcome');
    }
}