import { test } from '@playwright/test';

import SingleFileUploadPage from '../Pages/SingleFileUploadPage';

test("Validation of file upload", async ({ page }) => {

    const upload = new SingleFileUploadPage(page);

    await upload.goto();

    await upload.FileUploadValidation();

});