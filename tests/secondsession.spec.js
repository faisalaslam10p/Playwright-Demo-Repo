const {test, expect} = require ('@playwright/test');
const { Console } = require ('console');

test.skip('First Test', async ({page}) => {
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle('Google');
    console.log('This page has title - Google');

});

test.skip('Verify that User can login successfully with valid credentials', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill('standard_user');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.locator('#login-button').click();

    //Assertions for Login Verificaiton
    await expect(page.locator('.shopping_cart_link')).toBeVisible;
    await expect(page.getByText('Sauce Labs Backpack')).toHaveText('Sauce Labs Backpack');
});

test('Verify that user cannot login with invalid credentials', async ({page})=> {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill('invalid_user');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('invalid_sauce');
    await page.locator('#login-button').click();

    //Assertions
    //
    await expect(page.locator('#login-button')).toBeVisible;
   // await expect(page.locator('Xpath=/html/body/div/div/div[2]/div[1]/div/div/form/div[3]/h3').toBeTruth());
        await expect (page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
       // toHaveText('Epic sadface: Username and password do not match any user in this service')).toHaveClass('.error-message-container error');

});
//<div class="error-message-container error"><h3 data-test="error"><button class="error-button"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" class="svg-inline--fa fa-times fa-w-11 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></button>Epic sadface: Username and password do not match any user in this service</h3></div>