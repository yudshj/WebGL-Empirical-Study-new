import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vscode.dev/');
  await page.getByRole('tab', { name: 'Run and Debug (Ctrl+Shift+D)' }).locator('a').click();
  await page.getByRole('button', { name: 'Views and More Actions...' }).click();
  await page.locator('.context-view-block').click();
  await page.getByRole('button', { name: 'remote', exact: true }).click();
  await page.getByRole('tab', { name: 'Search (Ctrl+Shift+F)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Explorer (Ctrl+Shift+E)' }).locator('a').click();
  await page.getByRole('tab', { name: 'Source Control (Ctrl+Shift+G)' }).locator('a').click();
  await page.getByRole('menuitem', { name: 'Application Menu' }).locator('div').click();
  await page.getByText('New Text FileCtrl+K NNew File...Ctrl+Alt+Windows+NNew WindowCtrl+K Shift+NOpen F').click();
  await page.getByText('Visual Studio CodeEditing evolvedStartNew File...Open File...Open Folder...Open ').click();
});