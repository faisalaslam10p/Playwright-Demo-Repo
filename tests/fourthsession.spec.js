const {test, expect} = require ('@playwright/test');
const { Console, log } = require ('console');

test.describe('Test Structure & CodeGen',() =>{
    test.beforeEach('Login to the appliciton', async({page})=>{
        await page.goto('/');
        await login(page);
    });    

    test.afterEach('Logout from the application', async ({page})=>{
       await logout(page);
    });

    test('Verify that product is added in the cart', async ({page})=> {
       await AddtoCart(page);
        await expect(page.getByText('Sauce Labs Backpackcarry.')).toBeVisible();
    });

    test('Verify that there is no product displayed after removing the product from Card', async ({page})=> {
        await AddtoCart(page);
        await expect(page.getByText('Sauce Labs Backpackcarry.')).toBeVisible()
        await removeproductfromcart(page);
        await expect(page.locator('[data-test="continue-shopping"]')).toBeVisible();
    });
});

async function login(page){
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill('standard_user');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();
}

async function logout(page){
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await page.getByRole('link', { name: 'Logout' }).click();
}

async function AddtoCart(page){
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('a').filter({ hasText: '1' }).click();
}

async function removeproductfromcart(page) {
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
}