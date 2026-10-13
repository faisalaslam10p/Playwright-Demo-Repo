const { test, expect } = require('@playwright/test');
const { SignupPageClass } = require('../pages/SignupPageClass.js');
const { loginPageClass } = require('../pages/loginPageClass.js');

test('Verify that user can sign up and successfully log in to the website', { timeout: 60000 }, async ({ page }) => {
    const signupPage = new SignupPageClass(page);
    const loginPage = new loginPageClass(page);

    await signupPage.visitwebsite();
    await signupPage.signuponwebsite();
    await loginPage.Loginonwebsite();
    await expect(loginPage.assertionlogin).toBeVisible({ timeout: 15000 });
});
