import {} from '@playwright/test'
import { test } from '../../pages/base';
// test.beforeAll(async ({ page,loginPage }) => {  
//     await page.goto('/');
//     await loginPage.login(process.env.USERNAME, process.env.PASSWORD);
//     })
test.describe('Navigation secnarios', () => {   
    
// test.afterAll(async ({ page }) => {
//     await page.goto('/auth/logout');
//     await page.waitForTimeout(2000);
//     await page.close();
   // })
    test('Navigate to the Leave page', async ({ page, homePage, loginPage }) => {
        await page.goto('/');
     await loginPage.login(process.env.USERNAME , process.env.PASSWORD);
    await homePage.clickOnSideMenu('Leave');
    await homePage.verifyPageTitle('Leave')
    
    })

})