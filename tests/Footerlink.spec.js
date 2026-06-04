import { test } from '@playwright/test';

import Footerlink from '../Pages/Footerlink';

test(
    "MerryMoonMary Footerlink New Tab Validation",

    async ({ page }) =>
{
    const footerlinkmerry =
        new Footerlink(page);

    // Open Application
    await footerlinkmerry.goto();

    // Validate Footer Link
    await footerlinkmerry
        .Moonmerryfooterlinkvalidation();
});