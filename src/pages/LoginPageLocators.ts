import{Locator} from '@playwright/test'

export const loginPageData = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    submitButton:  '[type="submit"]',
    errorMessage: '.aoxd-alert-content-text',
    logOutDropDown: '.oxd-userdropdown-icon',
    logOutButton: 'a[href*="logout"]'

};
