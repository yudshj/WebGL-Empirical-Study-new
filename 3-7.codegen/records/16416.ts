import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://storage.googleapis.com/tfjs-examples/mnist/dist/index.html');
  await page.locator('#train-epochs').click();
  await page.locator('#train-epochs').fill('10');
  await page.locator('#model-type').selectOption('DenseNet');
  await page.getByRole('button', { name: 'Load Data and Train Model' }).click();
});