const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
setDefaultTimeout(60 * 1000);


let browser;
let page;

Given('User Navigate to the application', async function () {
    browser = await chromium.launch({ headless: false });
    page = await browser.newPage();
    await page.goto("https://automationexercise.com/");
});



When('User click on login link', async function () {
    await page.locator("//a[contains(text(),'Signup / Login')]").click();
});


Given('User Enter the UserName as {string}', async function (userName) {
    await page.locator("input[data-qa='login-email']").fill(userName);
});

Given('User Enter the password as {string}', async function (password) {
    await page.locator("input[type='password']").fill(password);
});

When('User Clickon the login button', async function () {
    await page.locator("button[data-qa='login-button']").click();
});

Then('Login should be success.', async function () {
    const actualUsername = await page.locator("//ul[@class='nav navbar-nav']//b[1]").textContent();
    await expect(actualUsername).toContain("Chetan Motghare");
    await browser.close();
});

Then('Login should fail.', async function () {
    const errorMsg = await page.locator("//input[@data-qa='login-password']/following-sibling::p[1]").textContent();
    await expect(errorMsg).toContain("Your email or password is incorrect!");
    await browser.close();
});