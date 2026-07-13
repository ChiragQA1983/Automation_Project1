
import { test } from '@playwright/test';

import iFramechain from '../Pages/iFramechain';

test('Nested iframe', async ({ page }) => {

  const iframechain=new iFramechain(page);

  await iframechain.goto();

  await iframechain.parentChildIframeValidation();

});



/*
import { test, expect } from '@playwright/test';

test('Nested iframe', async ({ page }) => {

  await page.goto('https://demoqa.com/nestedframes');

  const parentFrame = page.frameLocator('#frame1');

  const childFrame = parentFrame.frameLocator('iframe');

  await expect(childFrame.locator('p')).toHaveText('Child Iframe');

});*/