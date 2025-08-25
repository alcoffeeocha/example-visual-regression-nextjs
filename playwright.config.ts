import { defineConfig, devices } from "@playwright/test";

const browsers = ["Desktop Chrome"];
const appUrl = "http://localhost:3000";

export default defineConfig({
  testDir: "./tests",
  // Run all tests in parallel.
  fullyParallel: true,
  reporter: "html",
  // Run local dev server before starting the tests.
  webServer: {
    command: "npm run dev",
    url: appUrl,
    reuseExistingServer: true,
  },
  use: {
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: appUrl,
    // Collect trace when retrying the failed test.
    trace: "on-first-retry",
  },
  // Configure projects for major browsers.
  projects: browsers.map((userAgent) => ({
    name: userAgent.toLowerCase().replaceAll(" ", "-"),
    use: { ...devices[userAgent] },
  })),
  expect: {
    toHaveScreenshot: {
      // An acceptable amount of pixels that could be different, unset by default.
      // maxDiffPixels: 10,
    },

    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the
      // total amount of pixels, between 0 and 1.
      // maxDiffPixelRatio: 0.1,
    },
  },

  // Folder for test artifacts such as screenshots, videos, traces, etc.
  outputDir: "test-results",
});
