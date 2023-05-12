import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.aminer.org/pub/5c726dd0e1cd8ee894029698/synthesizing-supervision-for-learning-deep-saliency-network-without-human-annotation?s=social');
});