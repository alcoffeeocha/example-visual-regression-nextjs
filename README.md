# Example of Visual Regression Test in Next.js

## What to do?

1. Install dependencies with npm and run the development server
2. Access 'Title of Post A' and fix the spacing between 'Detail' button with its above paragraph, by editing /public/article.css
3. Access 'Title of Post B' to see the desired visual
4. Do your changes also affect the styles of ‘Title of Post B’? this is where below tests come in to play

## How to Run Tests?

1. Install headless browsers required by Playwright with `npx playwright install`
2. Simply run the test with `npm test`. This will give a failing test, because there is no snapshot or screenshot created yet, just re-run the test.
3. If we are happy with the result, save it with `npm run test-update`
