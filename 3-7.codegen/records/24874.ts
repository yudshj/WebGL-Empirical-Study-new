import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.nftstar.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.section-main-bg-1').click();
  const page1 = await page1Promise;
  await page1.goto('https://e.metagoal.com/#/');
  await page1.goto('https://e.metagoal.com/#/login');
  await page1.goto('https://e.metagoal.com/#/creatGame');
  await page1.getByRole('textbox').click();
  await page1.getByRole('textbox').fill('8888');
  await page1.locator('#app img').nth(1).click();
  await page1.getByRole('textbox').click();
  await page1.getByRole('textbox').fill('8888cdsdhu');
  await page1.locator('#app img').nth(1).click();
  await page1.getByRole('textbox').click();
  await page1.getByRole('textbox').click();
  await page1.getByRole('textbox').click();
  await page1.getByRole('textbox').fill('sdghids');
  await page1.locator('#app img').nth(1).click();
  await page1.locator('#app img').nth(1).click();
  await page1.locator('.mockbx22').click();
  await page1.locator('.mockbx22').click();
  await page1.locator('div:nth-child(2) > .content > .transform').click();
  await page1.getByText('25 GK LV 1 25 CB LV 1 21 CB LV 1 34 CB LV 1 28 CB LV 1 25 CM LV 1 30 CM LV 1 24 ').click();
  await page1.locator('.mockbx22').click();
  await page1.locator('.unllock').click();
  await page1.locator('div:nth-child(5)').first().click();
  await page1.locator('.handimg').first().click();
  await page1.getByText('10000 / 247').click();
  await page1.getByText('After leveling up, the players\' attributes grow differently. The Early Type play').click();
  await page1.goto('https://e.metagoal.com/#/activity/search');
  await page1.getByText('LV 2 38 CB').click();
  await page1.locator('#step1').getByText('Drill').click();
  await page1.getByText('START DRILL').click();
  await page1.getByText('View the result').click();
  await page1.getByText('The Drilling is completed.').click();
  await page1.locator('.button').first().click();
  await page1.locator('.mockbx22').click();
  await page1.getByText('sdghids 0 0 Connect WalletRefresh Wallet DataSearchMcoin History Disconnect Stan').click();
  await page1.getByText('sdghids 0 0 Connect WalletRefresh Wallet DataSearchMcoin History Disconnect Stan').click();
  await page1.locator('div:nth-child(5) > .content > .transform').click();
  await page1.getByRole('button', { name: 'Enter' }).nth(1).click();
  await page1.getByText('Last Tournament').first().click();
  await page1.getByText('Back').click();
  await page1.getByText('Back').click();
  await page1.getByRole('button', { name: 'Enter' }).nth(2).click();
  await page1.locator('.group_card_item-img').first().click();
  await page1.locator('#app').getByText('Close').click();
  await page1.getByText('Back Football Club').click();
  await page1.getByText('Back').click();
  await page1.locator('div:nth-child(3) > .content > .transform').click();
  await page1.locator('.mockbx22').click();
  await page1.getByText('OK', { exact: true }).click();
  await page1.getByText('OK', { exact: true }).click();
  await page1.locator('div:nth-child(2) > .content > .transform').click();
});