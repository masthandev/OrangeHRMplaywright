import {Page, chromium ,expect, Locator, Browser} from '@playwright/test'
import { loginPageData } from './LoginPageLocators';


export class CommonPage {
    page: Page;
    locator!: Locator;
    browser!: Browser;
    constructor(page: Page) {
        this.page = page;
    }

    // Navigate to a URL
    async navigateTo(url: string) {
        await this.page.goto(url);
        await this.page.waitForLoadState();
    }
    async refreshPage() {
        await this.page.reload();
        await this.page.waitForLoadState();
    }
    // this method enters the username
    async enterUserName(username: string) {
        await this.page.fill(loginPageData.usernameInput, username);
    }

    // this method enters the password
    async enterPassword(password: string) {
        await this.page.fill(loginPageData.passwordInput, password);
    }
    async clickSubmitButton() {
        await this.page.click(loginPageData.submitButton);
    }
    
    async getErrorMessage() {  
        await this.page.waitForSelector(loginPageData.errorMessage);
        return await this.page.locator(loginPageData.errorMessage).textContent();
    }
    


    // Get text from a popup message
    // async getPopupMessageText() {
    //     await this.page.waitForSelector(loginPageData.popupMessage);
    //     return await this.page.locator(loginPageData.popupMessage).textContent();
    // }

    // this method click LogOutDropDown
    async logOut() {
        await this.page.click(loginPageData.logOutDropDown);
        await this.page.click(loginPageData.logOutButton);
        await this.page.waitForLoadState('domcontentloaded');
    }
    
    
    // Fill an input field with the given value
    async click1(selector: string) {
        await this.page.click(selector);
    }

    // Click a locator
    async click(locator: Locator) {
    await locator.click();
    }  

    // Get text from a locator
    async getText(locator: Locator) {
    return await locator.textContent();
    }

    async selectTableRow(row: number) {
        const tableRows = await this.page.$$('table tr');
        await tableRows[row].click();

    }
    
    
    // Select a table row based on parameters
    async selectTableRowByParams(columnIndex: number, columnValue: string) {
        const tableRows = await this.page.$$('table tr');
        for (const row of tableRows) {
            const columns = await row.$$('td');
            const cellValue = await columns[columnIndex].textContent();
            if (cellValue === columnValue) {
                await row.click();
                break;
            }
        }
    }
    
    // async getTableRowValues(row: number): Promise<{ [key: string]: string }> {
    //     const tableRows = await this.page.$$('table tr');
    //     const columns = await tableRows[row].$$('td');
    //     const values: { [key: string]: string } = {};
    //     for (let i = 1; i < columns.length - 1; i++) {
    //         const columnName = `column${i}`;
    //         const columnValue = await columns[i].textContent();
    //         values[columnName] = columnValue;
    //     }
    //     return values;
    // }

    async handleAlert() {
        const alert = this.page.locator('.alert');
        if (await alert.isVisible()) {
            await alert.click();
        }
    }
    async handlePopup(cancel: boolean) {
        const popup:any = await this.page.locator('.orangehrm-dialog-modal');
        if (await popup.isVisible()) {
            if (cancel) {
                await popup.click('.cancel-button');
            } else {
                await popup.click('.save-button');
            }
        }
    }
    async handlePrompt(text: string) {
        const prompt:any = this.page.locator('.prompt');
        if (await prompt.isVisible()) {
            await prompt.fill(text);
            await prompt.click('.save-button');
        }
    }
        async scrollToElement(selector: string) {
            await this.page.evaluate((selector) => {
                const element = document.querySelector(selector);
                if (element) {
                    element.scrollIntoView();
                }
            }, selector);
        }
        async clearText(selector: string) {
            await this.page.fill(selector, '');
        }
        async selectDropdown(selector: string, value: string) {
            await this.page.selectOption(selector, { value });
        }
    }
