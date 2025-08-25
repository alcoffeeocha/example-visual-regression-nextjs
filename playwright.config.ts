import { defineConfig, devices } from "@playwright/test";

const browsers = ["Desktop Chrome"];
const appUrl = "http://localhost:3000";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  reporter: "html",
  webServer: {
    command: "npm run dev",
    url: appUrl,
    reuseExistingServer: true,
  },
  use: {
    baseURL: appUrl,
    trace: "on-first-retry",
  },
  projects: browsers.map((userAgent) => ({
    name: userAgent.toLowerCase().replaceAll(" ", "-"),
    use: { ...devices[userAgent] },
  })),
});
