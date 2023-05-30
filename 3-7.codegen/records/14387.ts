import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.ethermon.io/');
  await page.getByText('Players').click();
  await page.locator('.overlay').click();
  await page.locator('div').filter({ hasText: /^My CollectionsQuests to EarnLeaderboardMy CollectionsQuests to EarnLeaderboard$/ }).getByRole('img').nth(1).click();
  await page.locator('i').nth(1).click();
  await page.locator('div').filter({ hasText: /^My CollectionsQuests to EarnLeaderboardMy CollectionsQuests to EarnLeaderboard$/ }).getByRole('img').first().click();
  await page.locator('.monster-card-new__mon-img').first().click();
  await page.locator('.close').first().click();
  await page.locator('div').filter({ hasText: /^My CollectionsQuests to EarnLeaderboardMy CollectionsQuests to EarnLeaderboard$/ }).getByRole('img').nth(1).click();
  await page.getByText('register now').click();
  await page.locator('div').filter({ hasText: /^My CollectionsQuests to EarnLeaderboardMy CollectionsQuests to EarnLeaderboard$/ }).getByRole('img').nth(1).click();
  await page.getByText('register now').click();
  await page.getByText('Quests to Earn').first().click();
  await page.getByText('register now').click();
  await page.getByText('Connect').click();
  await page.locator('div').filter({ hasText: /^WalletConnect$/ }).locator('div').first().click();
  await page.getByText('Ethermons').click();
});