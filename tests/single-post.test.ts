import { test, expect, type Page } from "@playwright/test";
import posts from "@/app/posts.json";

const postPaths = posts.map((post) => post.slug);

async function waitUntilPageIsDrawn(page: Page) {
  await page.waitForLoadState("networkidle");
  // wait for the injected stuffs
  await page.waitForSelector('link[href*="article.css"]', {
    timeout: 5000,
    state: "attached",
  });
  // wait for fonts to be ready
  await page.evaluate(() => document.fonts.ready);
  // delay for painting
  await page.waitForTimeout(1000);
}

test("A post detail page", async ({ page }) => {
  postPaths.forEach(async (path) => {
    await page.goto(path);
    await waitUntilPageIsDrawn(page);
    await expect(page).toHaveScreenshot();
  });
});
