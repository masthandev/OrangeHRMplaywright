// File: Homepage.ts
import {Page, expect, Locator} from'@playwright/test'
import { CommonPage } from './CommonPage';
import{homePageData} from './HomepageLocators'

export class Homepage extends CommonPage {
    page: Page;
    locator: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }

    async verifyPageTitle(title: string) {
        expect(await this.page.title()).toContain(title);
    }

    async clickOnSideMenu(menuPanel: string) {
        const menuIndex = homePageData.mennuPanel.findIndex(item => item === menuPanel);
        if (menuIndex === -1) {
            throw new Error(`Menu "${menuPanel}" not found in homePageData`);
        }
        await this.page.click(`text=${homePageData[menuPanel][menuIndex]}`);
    }
    async clickOnSubMenu(subMenu: string) {
         let  sideMenuPanel   = `[href*="${subMenu}"]`
         await this.page.locator(sideMenuPanel).click();
            await this.page.waitForLoadState();
    }
}

export class DashboardPage extends CommonPage {
    page: Page;
    locator: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
    }
    
    // method to click on side menu

    async clickOnSideMenu1(menuPanel: string) {
        const menuIndex = homePageData.mennuPanel.findIndex(item => item === menuPanel);
        if (menuIndex === -1) {
            throw new Error(`Menu "${menuPanel}" not found in homePageData`);
        }
        await this.page.click(`text=${homePageData[menuPanel][menuIndex]}`);
    }
    async clickOnSubMenu(subMenu: string) {
         let  sideMenuPanel   = `[href*="${subMenu}"]`
         await this.page.locator(sideMenuPanel).click();
            await this.page.waitForLoadState();
    }

    async verifyPageTitle(title: string) {
        expect(await this.page.title()).toBe(title);
    }


    
}