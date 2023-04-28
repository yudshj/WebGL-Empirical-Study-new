import { indexUrls } from '../tasks/utils/config';

const ILOC = 2;

const INDEX = indexUrls[ILOC][0];
const URL = indexUrls[ILOC][1];
const HAR_PATH = `output/har/${INDEX.padStart(5, '0')}.har.zip`;

// tests/example1.test.js
import { test } from '@playwright/test';

test.use({
    headless: false,
});

test.describe('Testing HAR replay', () => {
    test("1. HAR replay", async ({ page, context }) => {
        await context.routeFromHAR(HAR_PATH);
        await page.goto(URL);
        await page.waitForLoadState('networkidle', {timeout: 30_000}).catch(() => {});
        await page.waitForTimeout(15_000);
    })
});