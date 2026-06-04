import { test } from '@playwright/test';
import BrokenPage from '../Pages/BrokenPage';

test("Broken link 403 validation", async ({ page }) => {

  const brokenpage = new BrokenPage(page);

  await brokenpage.goto();

  await brokenpage.Brokenpagelink403Validation();

  await brokenpage.Brokenpagelink400Validation();

});