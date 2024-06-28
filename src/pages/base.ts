import {test as base} from '@playwright/test'
import {Loginpage, CommonPage, Homepage, Leavepage, Timesheetpage} from './index'

type MyFixtures = {
    loginPage : Loginpage;
    commonPage: CommonPage;
    homePage: Homepage;
}

export const test = base.extend<MyFixtures>({
 loginPage: async ({page}, use) => {    
     await use(new Loginpage(page));
 },
 commonPage : async ({page}, use) => {    
    await use(new CommonPage(page));
 },
 homePage : async ({page}, use) => {    
    await use(new Homepage(page));
 }

 
})
export {expect, Page} from '@playwright/test'