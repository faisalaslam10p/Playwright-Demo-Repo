import { defineConfig } from '@playwright/test';
import {SignupPageClass} from '../pages/SignupPageClass';
import {randomUsername} from '../pages/SignupPageClass.js';
import {randomPassword} from '../pages/SignupPageClass.js';
const Data = require ('../Constant/Constant.js');



exports.loginPageClass = class loginPageClass{
    /** 
     * @param {import('@playwright/test').Page} page
    */
        constructor(page){
            this.page = page;
            this.userlogin = page.getByRole('link', { name: 'Log in' });
            this.loginusername = page.locator('#loginusername');
            this.loginpassword = page.locator('#loginpassword');
            this.loginbuttonclick = page.getByRole('button', { name: 'Log in' });
            this.assertionlogin = page.getByRole('link', { name: 'Log out' });

        }

        async Loginonwebsite(){
            await this.userlogin.click();
            await this.loginusername.click();
            await this.loginusername.fill(randomUsername);
            await this.loginpassword.click();
            await this.loginpassword.fill(randomPassword);
            await this.loginbuttonclick.click();
        }
    
    }