const { config } = require("../config/config")

locators = {
    "username_input": "#user-name",
    "password_input": "#password",
    "login_button": "//a[contains(text(),'Signup / Login')]",
    "inventory_container": "#inventory_container"
}

class LoginPage {

    async navigateToLoginScreen() {
        //return await page.goto(global.BASE_URL);
        return await page.goto("https://automationexercise.com/");
    }

    async clickOnLoginBtn() {
        return await page.click(locators.login_button);
    }

    async submitLoginForm() {
        const element = await page.waitForSelector(locators.username_input);
        await page.fill(locators.username_input, 'standard_user');
        await page.fill(locators.password_input, 'secret_sauce');
        await page.click(locators.login_button);
    }

    async verifyAfterLoginPage() {
        await page.waitForSelector(locators.inventory_container);
        const visible = await page.isVisible(locators.inventory_container);
        return expect(visible).to.equal(true);
    }
}

module.exports = { LoginPage };