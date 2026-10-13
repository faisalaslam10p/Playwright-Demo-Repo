const { test, expect } = require('@playwright/test');

test.describe('Test Structure & CodeGen', () => {
    test.beforeEach('Login to the application', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveURL(/\/inventory\.html$/);
    });

    test.afterEach('Close the page after each test', async ({ page }) => {
        await page.close();
    });

    test('Verify that product is added in the cart', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('.shopping_cart_link').click();
        await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
    });

    test('Verify that there is no product displayed after removing the product from Card', async ({ page }) => {
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('.shopping_cart_link').click();
        await expect(page.getByText('Sauce Labs Backpack', { exact: true })).toBeVisible();
        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
        await expect(page.getByRole('button', { name: 'Continue Shopping' })).toBeVisible();
    });
});