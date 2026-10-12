import { defineConfig } from '@playwright/test';
//import {Constant} from '../Constans/Constant.js'
const Data = require ('../Constant/Constant.js');

export const randomUsername = Math.random().toString(36).substring(2,7);
console.log(randomUsername);
export const randomPassword = Math.random().toString(36).substring(2,7);
console.log(randomPassword);

exports.SignupPageClass = class SignupPageClass{
/** 
 * @param {import('@playwright/test').Page} page
*/

    constructor(page){
        this.page = page;
        //SingupLocators
        this.ClickonSignupbuttontext = page.getByRole('link', { name: 'Sign up' });
        this.Clickonsignupusername = page.getByLabel('Username:');
        this.clickonsignuppassword = page.getByLabel('Password:');
        this.buttonsignup = page.getByRole('button', { name: 'Sign up' });
        //LoginLocators
        this.userlogin = page.getByRole('link', { name: 'Log in' });
        this.loginusername = page.locator('#loginusername');
        this.loginpassword = page.locator('#loginpassword');
        this.loginbuttonclick = page.getByRole('button', { name: 'Log in' });
        this.assertionlogin = page.getByRole('link', { name: 'Log out' });
        //AddtoCardLocators
        this.addtocartproduct = page.getByRole('link', { name: 'Nokia lumia' });
        this.assertaddtocartproduct = page.getByRole('link', { name: 'Add to cart' });
        this.buttonaddtocart = page.getByRole('link', { name: 'Add to cart' });
        this.gotoaddtocart = page.getByRole('link', { name: 'Cart', exact: true });
        this.assertaddtocart2 = page.getByRole('button', { name: 'Place Order' });
        this.deleteproductfromcart = page.getByRole('link', { name: 'Delete' });

    }
    

    async visitwebsite() {
        await this.page.goto('https://www.demoblaze.com/index.html');
    }

    async signuponwebsite(){
        await this.ClickonSignupbuttontext.click();
        await this.Clickonsignupusername.click();
        await this.Clickonsignupusername.fill(randomUsername);
        await this.clickonsignuppassword.click();
        await this.clickonsignuppassword.fill(randomPassword);
        await this.buttonsignup.click();
        
        }



}