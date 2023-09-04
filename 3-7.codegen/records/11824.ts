import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://live.upchain.net/');
  await page.goto('https://live-sso.upchain.net/auth/realms/upchain/protocol/openid-connect/auth?client_id=mgmweb&redirect_uri=https%3A%2F%2Flive.upchain.net%2F&state=c04f14da-db12-4638-bf01-cff69a9887dc&response_mode=fragment&response_type=code&scope=openid&nonce=52f84153-b3c1-4e09-b16f-92eace6ec33a');
});