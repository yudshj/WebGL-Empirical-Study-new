import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://convertmodel.com/');
  await page.frameLocator('internal:text="</body> </html>"i').getByRole('button', { name: 'Select' }).click();
  await page.frameLocator('internal:text="</body> </html>"i').getByRole('button', { name: 'Select' }).setInputFiles('mobilenetv2-12.onnx');
  await page.frameLocator('internal:text="</body> </html>"i').getByRole('button', { name: 'Convert' }).click();
});