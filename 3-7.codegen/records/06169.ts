import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://builder.blippar.com/');
  await page.goto('https://accounts.blippar.com/?next=/o/authorize/%3Fclient_id%3DyhrryNEcbr6bHQSDskIpJg5XgotBX25khAEeQroL%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fblipps.blippar.com%252Fconnect%252Fblippar%252Fcallback%26scope%3Dread%26state%3De7a705b705f4b7e71d33');
  await page.goto('https://accounts.blippar.com/?next=%2Fo%2Fauthorize%2F%3Fclient_id%3DyhrryNEcbr6bHQSDskIpJg5XgotBX25khAEeQroL%26response_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fblipps.blippar.com%252Fconnect%252Fblippar%252Fcallback%26scope%3Dread%26state%3De7a705b705f4b7e71d33');
});