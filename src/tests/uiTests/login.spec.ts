import {Page, expect, } from '@playwright/test'
//import { test } from '../pages/base.ts'
 //import Loginpage from '../pages/Loginpage.ts';
import { test } from '../../pages/base';
import dot from 'dotenv';

test.describe('Login the application', () => {
  test('Login to the application', async ({ loginPage, page }) => {
   let  username = process.env.USERNAME;
   let  password = process.env.PASSWORD;
  await page.goto('/');
  await loginPage.login("Admin ", "admin123");
  await page.getByTitle("OrangeHRM")
  });
  test.skip('Verify the page title', async ({ loginPage,page }) => {
    expect(await page.title()).toBe('OrangeHRM');
  });
  
});