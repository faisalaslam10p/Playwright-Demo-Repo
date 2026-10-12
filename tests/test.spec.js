const { test, expect } = require('@playwright/test');


test('test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.getByLabel('Username:').click();
    await page.getByLabel('Username:').fill('faisaltest5');
    await page.getByLabel('Password:').click();
    await page.getByLabel('Password:').fill('faisaltest5');
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Sign up' }).click();
  });