const { config } = require("../config/config")

locators = {
    "username_input": "input[data-qa='login-email']",
    "password_input": "input[type='password']",
    "login_button": "//a[contains(text(),'Signup / Login')]",
    "clickLogin": "button[data-qa='login-button']",
    "validateUsername": "//ul[@class='nav navbar-nav']//b[1]",
    "errorMessage": "//input[@data-qa='login-password']/following-sibling::p[1]"
}

class LoginPage {

    async navigateToLoginScreen() {
        //return await page.goto(global.BASE_URL);
        return await page.goto("https://automationexercise.com/");
    }

    async clickOnLoginBtn() {
        return await page.click(locators.login_button);
    }
    async enterEmail(userName) {
        const element = await page.waitForSelector(locators.username_input);
        return await page.fill(locators.username_input, userName);
    }
    async enterPassword(password) {
        return await page.fill(locators.password_input, password);
    }
    async clickLogin() {
        return await page.click(locators.clickLogin);
    }



    async submitLoginForm() {
        const element = await page.waitForSelector(locators.username_input);
        await page.fill(locators.username_input, '');
        await page.fill(locators.password_input, 'Test@1234');
        await page.click(locators.login_button);
    }

    async verifyAfterLoginPage() {
        await page.waitForSelector(locators.validateUsername);
        const actualUsername = await page.textContent(locators.validateUsername);
        await expect(actualUsername).toContain("Chetan Motghare");
        /*const visible = await page.isVisible(locators.inventory_container);
        return expect(visible).to.equal(true);*/
    }
}

module.exports = { LoginPage };