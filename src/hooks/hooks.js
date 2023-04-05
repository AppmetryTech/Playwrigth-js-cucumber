//@ts-ignore
// Import the necessary modules and functions
const { BeforeAll, AfterAll, Before, After, Status } = require("@cucumber/cucumber");

const { chromium } = require("@playwright/test");



/*// Declare variables to hold the browser and context objects
let browser;
let page;



// Define a BeforeAll hook to run before all scenarios
BeforeAll(async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    pageFixture.page = page;

});


// Define an AfterAll hook to run after all scenarios
AfterAll(async function () {
    await page.close();
    await browser.close();

});*/


// const { World } = require('@cucumber/cucumber')

// Launch options.
const options = {
    headless: false,
    slowMo: 100
};

// Create a global browser for the test session.
BeforeAll(async function () {
    console.log('before all ...');
    global.browser = await chromium.launch(options);
});

AfterAll(async function () {
    console.log('after all ...');
    await global.browser.close();
});

// Create a fresh browser context for each test.
Before(async function () {
    console.log('before ...');
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
});

// close the page and context after each test.
After(async function () {
    console.log('after pass...');
    await global.page.close();
    await global.context.close();

});


After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        var buffer = await global.page.screenshot({ path: `reports/${scenario.pickle.name}.png`, fullPage: true })
        this.attach(buffer, 'image/png');
    }
});

