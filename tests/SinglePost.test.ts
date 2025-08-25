import { test, expect, type Page } from "@playwright/test";
import posts from "@/app/posts.json";

const postPaths = posts.map((post) => post.slug);

async function waitUntilPageIsRedrawn(page: Page) {
  await page.waitForLoadState("networkidle");
  // wait until some injected nodes exists in DOM
  await page.waitForSelector('link[href*="article.css"]', {
    timeout: 5000,
    state: "attached",
  });
  // wait for fonts to be ready
  await page.evaluate(() => document.fonts.ready);
}

// Generate individual test for each post to avoid stopping on first failure
for (const path of postPaths) {
  test(`Page ${path}`, async ({ page }) => {
    await page.goto(path);
    await waitUntilPageIsRedrawn(page);
    await expect(page).toHaveScreenshot();
  });
}
