const {test, expect} = require ('@playwright/test');
const { Console, log } = require ('console');
const { SignupPageClass } = require ('../pages/SignupPageClass.js');
const { loginPageClass } = require('../pages/loginPageClass.js');
const { removeproductfromcartPageClass } = require ('../pages/removeproductfromcartPageClass.js');
const exp = require('constants');
require = ('allure-playwright');
import { allure } from "allure-playwright";


test.describe('Page Object Modal', () => {

    test.beforeEach('Login to the appliciton', async({page})=>{
        const visitpageobj = new SignupPageClass(page);
        const LoginWebste = new loginPageClass(page);
        await visitpageobj.visitwebsite();
        await visitpageobj.signuponwebsite();
        await page.waitForTimeout(1000);
        await LoginWebste.Loginonwebsite();
        await page.waitForTimeout(1000);
        await expect(LoginWebste.assertionlogin).toBeVisible({ timeout: 15000 });
        await page.waitForTimeout(1000);
    });

    test('Verify that user can successfully login , add and delete product', async ({page})=> {
       const addtocard = new removeproductfromcartPageClass(page);
        await addtocard.AddtoCartonwbesite();
        await page.waitForTimeout(1000);
        await expect(addtocard.assertaddtocart2).toBeVisible();
         await addtocard.deletefromaddtocart();
            await expect(addtocard.deleteproductfromcart).toHaveCount(0);
    });

});