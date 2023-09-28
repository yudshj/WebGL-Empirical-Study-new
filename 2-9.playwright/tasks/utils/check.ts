import { Browser } from "playwright";

const url1 = "chrome://gpu/";
const url2 = "https://www.soft8soft.com/webglreport";
const url3 = "https://webglsamples.org/aquarium/aquarium.html";
export async function checkGpu(browser: Browser) {
    // Check if hardware acceleration is enabled. Without it, our tests will be much slower.
    const page = await browser.newPage();
    await page.goto(url1);
    // await waitFor(2000);
    await page.waitForTimeout(500);
    // await page.screenshot({ path: 'screenshot_1.png', fullPage: true });
    let featureStatusList = page.locator(".feature-status-list")
    // await expect(featureStatusList).toContainText("Hardware accelerated")
    const text = await featureStatusList.textContent()
    if (!text || !text.includes("Hardware accelerated")) {
        throw new Error("Test1: Hardware acceleration is not enabled")
    }
    // await page.goto(url2)
    // await page.waitForTimeout(2000);
    // test("3. aquarium", async ({ page }) => {
    //     await page.goto(url3)
    //     await waitFor(5000);
    //     await page.screenshot({ path: 'screens/screenshot' + currentTime + '_3.png', fullPage: true });
    // })
}