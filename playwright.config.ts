import { defineConfig, devices, PlaywrightTestConfig} from '@playwright/test';
import dotenv from 'dotenv';
import path from 'path';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
 dotenv.config({
   path: path.resolve(__dirname, '.env'),
   override: true,
 });


/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig({
  //globalSetup:"./src/utils/globalSetup.ts",
 // testDir: './src/tests',
  //testMatch: 'C:/OrangeHRMplaywright/src/tests/login.spec.ts',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { open:"never",outputFolder: './htmlReport',
  }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://opensource-demo.orangehrmlive.com/',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },

  outputDir: './output',
  preserveOutput: "always",
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'orangeHrmUi',
      testDir: './src/tests/UiTests',
      testMatch: '**/uiTests/navigations.spec.ts',
      use: { "browserName": 'chromium' ,
        headless: false,  
        screenshot: 'on',
        viewport: null, // Add this line to disable automatic viewport management
        launchOptions: {
          args: ['--start-maximized'] // Add this line to start the browser maximized
        }
      },
    },
    {
      name: 'orangeHrmApi',
      testDir: './src/tests/ApiTests',
      testMatch: 'C:/OrangeHRMplaywright/src/tests/ApiTests/githupApi.spec.ts',
      use: { "browserName": 'chromium' ,
        headless: true,
        screenshot: 'on',
        viewport: null, // Add this line to disable automatic viewport management
        launchOptions: {
          args: ['--start-maximized'] // Add this line to start the browser maximized
        },
      },
    },
  

    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
 
  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },

});
