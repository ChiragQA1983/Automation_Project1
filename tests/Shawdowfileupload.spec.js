import { test } from '@playwright/test';

import Shadowfileupload from '../Pages/Shadowfileupload';

test("Validate the Shadow DOM file upload", async ({ page }) =>
{
    const shadowfileupload = new Shadowfileupload(page);

    await shadowfileupload.goto();

    await shadowfileupload.shadowfileuploadvalidation();
});