# Playwright Test Project
This example project contains Playwright tests for gMaps that utilize the playwright-abstract-element package for structured and maintainable test automation.

## Prerequisites
Node.js (version 18 or newer)
Yarn package manager
## Installation
Clone the Repository

```bash
git clone git@github.com:elkemper/pw-gmaps-example.git
cd pw-gmaps-example
```
### Install Dependencies

```bash
yarn install
npx playwright install
```
## Running Tests
### To execute the Playwright tests in headed mode:

```bash
yarn test
```
This command starts the Playwright test runner and opens the browser in headed mode, allowing you to see the tests as they run.

## Project Structure
* `src/specs/`: Contains all the test files written using Playwright.
* `src/pages/`: Contains page object models.
* `src/elements/`: Contains simple elements.
* `src/components/`: Contains components comprised using elements.
* `src/helpers/`: Contains helper utilities.

### Writing Tests
Add your test files in the tests/ directory. Here's a basic example of how to write a test using the playwright-abstract-element package:

```typescript
import { test } from 'playwright/test';
import Search from '../pages/Search';
import { startFlow } from '../helpers/FlowHelper';

test('Search input should accept text', async () => {
  await startFlow();
  await Search.searchInput.type('Playwright');
  await Search.searchInput.expect.toHaveValue('Playwright');
});
```
> Please note that the callback for the `test` function doesn't need a `{ page }` parameter. `AbstractElement` class will do everything for you.

### i18n
Please be aware that gMaps pulls the locale from your computer, and this repo for now works only in Lithuanian.

#### Configuration
The project uses the default Playwright configuration. You can customize the playwright.config.ts file to change settings like browser types, test directories, timeouts, and more.  
