import { test, expect } from '@playwright/test';
test("verify the title TTA cart",async({page})=>{
  await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
  await page.waitForTimeout(3000);
  await expect(page).toHaveTitle("TTACart - Login");
})