# Visual Regression Testing with Next.js & Playwright

## Why Visual Regression Testing?

Ever worried that fixing CSS in one place might break the styling somewhere else? With hundreds of articles or pages, manually checking every page after a style change isn't practical.

Visual regression testing automatically captures screenshots of your pages and compares them against reference images, catching unintended visual changes before they reach production.

## Demo Scenario

This example simulates a common real-world problem:

1. **The Issue**: Post A's button has no spacing and looks cramped
2. **The Challenge**: Fix Post A without breaking Posts B and C, just by editing /public/article.css
3. **Expectation**: Only Post A that has failing test result but with intended visual updates (1 failed, 2 passed)
4. **Try it**: Make your CSS fix, run tests, and see what breaks!

## Getting Started

### Setup

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install

# Start dev server (optional - tests will auto-start it)
npm run dev
```

### Running Tests

```bash
# First run - generates initial screenshots (will fail if there are no screenshots)
npm test

# Re-run to verify tests pass with baseline screenshots
npm test

# Update screenshots if you are satisfied with the result you have made
npm run test-update
```
