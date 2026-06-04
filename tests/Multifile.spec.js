import { test } from '@playwright/test';

import MultifileuploadPage from '../Pages/MultifileuploadPage';

test('Validate Multiple File Upload', async ({ page }) => {

    const multifile = new MultifileuploadPage(page);

    await multifile.goto();

    await multifile.MultifileUploadValidation();

});
