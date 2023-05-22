import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.kubota.com/futurecube/?redirected');
  await page.goto('https://www.kubota.com/futurecube/');
  await page.locator('.js_topIntro_cubeButton').click();
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.getByRole('navigation').click();
  await page.locator('.js_lower_kvMain > div:nth-child(4)').click();
  await page.locator('section').filter({ hasText: 'Fully automated electric tractor VISION Improving productivity and reducing envi' }).locator('div').nth(3).click();
  await page.getByText('Kubota will continually advance to realize sustainable agriculture.').click();
  await page.locator('span').filter({ hasText: 'Fully automated electric tractor TECHNOLOGY #01 Kubota started developing agricu' }).click();
  await page.getByText('After WWII in 1945, Japan faced a severe food shortage caused by repeated poor w').click();
  await page.getByText('Kubota’s agricultural machinery contributed to Japan’s post-war food production ').click();
  await page.locator('section').filter({ hasText: 'Fully automated electric tractor TECHNOLOGY #02 Japan’s continuing decline and a' }).locator('div').nth(3).click();
  await page.getByText('That is Kubota’s challenge to sustain the future of agriculture.').click();
  await page.locator('span').filter({ hasText: 'Fully automated electric tractor TECHNOLOGY #03 One of Kubota’s answers for sust' }).click();
  await page.getByText('Global warming is an inseparable issue for the future of agriculture. As the imp').click();
  await page.getByText('Kubota is dedicating all our efforts to research Earth-friendly agriculture.').click();
  await page.locator('span').filter({ hasText: 'Fully automated electric tractor TECHNOLOGY #04 Shifting from automatic to auton' }).click();
  await page.getByText('In 2020, Kubota launched a strategic partnership with American semiconductor man').click();
  await page.getByText('All our efforts for sustainable agriculture. Kubota will also promote co-creatio').click();
});