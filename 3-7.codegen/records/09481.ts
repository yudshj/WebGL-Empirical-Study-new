import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/neuroneural/brainchop');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'neuroneural.github.io/brainchop/' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('button', { name: 'Ok' }).click();
  await page1.getByRole('button', { name: 'Run' }).click();
  await page1.getByText('Output 3D').click();
  await page1.getByRole('form').filter({ hasText: 'Open Brain T1 MRISelect NIfTI fileBrowseInput 3D (Enhancement)Segmentation Optio' }).getByRole('img').nth(2).click();
  await page1.locator('#output-threejs-container canvas').click({
    position: {
      x: 478,
      y: 197
    }
  });
  await page1.locator('#output-threejs-container canvas').click({
    position: {
      x: 534,
      y: 217
    }
  });
  await page1.mouse.wheel(0, -100);
  await page1.mouse.wheel(0, -100);
  await page1.getByRole('listitem').filter({ hasText: 'opacity' }).locator('div').nth(4).click();
  await page1.locator('#gui').getByRole('textbox').click();
  await page1.locator('#gui').getByRole('textbox').fill('0.6');
  await page1.locator('#gui').getByRole('textbox').press('Enter');
  await page1.getByRole('button', { name: '' }).click();
});