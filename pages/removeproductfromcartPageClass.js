import { defineConfig } from '@playwright/test';
exports.removeproductfromcartPageClass = class removeproductfromcartloginPageClass{
    /** 
     * @param {import('@playwright/test').Page} page
    */
    constructor(page){
        this.page = page;
        this.addtocartproduct = page.getByRole('link', { name: 'Nokia lumia' });
        this.assertaddtocartproduct = page.getByRole('link', { name: 'Add to cart' });
        this.buttonaddtocart = page.getByRole('link', { name: 'Add to cart' });
        this.gotoaddtocart = page.getByRole('link', { name: 'Cart', exact: true });
        this.assertaddtocart2 = page.getByRole('button', { name: 'Place Order' });
        this.deleteproductfromcart = page.getByRole('link', { name: 'Delete' });
    }

    async AddtoCartonwbesite(){
        await this.addtocartproduct.click();
        const dialogPromise = this.page.waitForEvent('dialog');
        await this.buttonaddtocart.click();
        const dialog = await dialogPromise;
        await dialog.accept();
        await this.gotoaddtocart.click();
        await this.deleteproductfromcart.waitFor({ state: 'visible' });
       
    }

    async deletefromaddtocart(){
        await this.deleteproductfromcart.waitFor({ state: 'visible' });
        await this.deleteproductfromcart.click();
    }
}