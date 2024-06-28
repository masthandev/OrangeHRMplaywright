import {Page ,Expect} from '@playwright/test'
import { test } from '../../pages/base';
//const leaveData = require('../../testData/leaveData.json');
import * as leaveData from './testData/leaveData.json'

test.describe('Leave secnarios', () => {
    test.beforeAll(async ({ page,loginPage }) => {

        await page.goto('/');
        await loginPage.login('Admin', 'admin123');
        
    });

    test('Login to the application', async ({ loginPage, page }) => {
        setTimeout(async () => {
            console.log('Waiting for 2 seconds');
            console.log(leaveData.LeaveData.leaveType);
    },2000);
})
})