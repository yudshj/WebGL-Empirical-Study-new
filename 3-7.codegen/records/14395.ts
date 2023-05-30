import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.locgame.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 1071,
      y: 653
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 659,
      y: 673
    }
  });
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#unity-canvas').click({
    position: {
      x: 704,
      y: 474
    }
  });
  const page1 = await page1Promise;
  await page1.getByLabel('Email').click();
  await page1.getByLabel('Email').fill('mrliangboqiang@sina.com');
  await page1.getByLabel('Email').press('Enter');
  await page1.getByRole('button', { name: 'Next' }).click();
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).fill('Aa11223--');
  await page1.getByText('Confirm Password').click();
  await page1.getByLabel('Confirm Password').fill('Aa112233--');
  await page1.getByLabel('By using our website, you agree to ourPrivacy Policy and our Terms and Conditions.').check();
  await page1.getByRole('button', { name: 'Sign Up' }).click();
  await page1.locator('div').filter({ hasText: /^PasswordPasswords Do Not Match\.$/ }).locator('div').click();
  await page1.getByLabel('Password', { exact: true }).click();
  await page1.getByLabel('Password', { exact: true }).press('ArrowLeft');
  await page1.getByLabel('Password', { exact: true }).press('ArrowLeft');
  await page1.getByLabel('Password', { exact: true }).fill('Aa112233--');
  await page1.getByLabel('Password', { exact: true }).press('ArrowRight');
  await page1.getByLabel('Password', { exact: true }).press('ArrowLeft');
  await page1.getByLabel('Password', { exact: true }).press('ArrowLeft');
  await page1.getByLabel('Password', { exact: true }).press('ArrowRight');
  await page1.getByLabel('Password', { exact: true }).fill('Aa1122--');
  await page1.getByLabel('Confirm Password').click();
  await page1.getByLabel('Confirm Password').press('PageUp');
  await page1.getByLabel('Confirm Password').press('PageUp');
  await page1.getByLabel('Confirm Password').press('ArrowLeft');
  await page1.getByLabel('Confirm Password').press('ArrowLeft');
  await page1.getByLabel('Confirm Password').fill('Aa1122--');
  await page1.getByRole('button', { name: 'Sign Up' }).click();
  await page.locator('#unity-canvas').click({
    position: {
      x: 598,
      y: 274
    }
  });
  await page.getByPlaceholder('Email').fill('mrliangboqiang@sina.com');
  await page.locator('#unity-canvas').click({
    position: {
      x: 566,
      y: 318
    }
  });
  await page.getByPlaceholder('Password').fill('Aa1122--');
  await page.locator('#unity-canvas').click({
    position: {
      x: 627,
      y: 388
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 670,
      y: 392
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 775,
      y: 326
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 674,
      y: 391
    }
  });
});