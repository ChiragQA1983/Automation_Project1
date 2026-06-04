import { test } from '@playwright/test';

import DownloadFile from '../Pages/DownloadFile';

test('Validate File Download', async ({ page }) =>
{
    const downloadfile = new DownloadFile(page);

    await downloadfile.goto();

    await downloadfile.downloadTextFile();
});