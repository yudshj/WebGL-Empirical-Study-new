import { test, expect } from '@playwright/test';

test.use({
  headless: true,
  // viewport: { width: 1280, height: 720 },
  ignoreHTTPSErrors: true,
  launchOptions: {
    args: [
      "--use-gl=egl",
      "--enable-gpu",
    ]
  }
});

test("GPU hardware acceleration", async ({ page }) => {
  await page.goto("chrome://gpu")
  let featureStatusList = page.locator(".feature-status-list")
  await expect(featureStatusList).toContainText("Hardware accelerated")
});