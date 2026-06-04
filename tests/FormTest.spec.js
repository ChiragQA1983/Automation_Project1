import { test } from '@playwright/test';
import path from 'path';

import FormPage from '../Pages/FormPage';
import ExcelUtils from '../Pages/ExcelUtils';

test("Validate Form Using Excel Data", async ({ page }) =>
{
    // Stable Absolute Excel File Path
    const filepath = path.resolve(
        'tests',
        'testdata',
        'TestData.xlsx'
    );

    console.log("Excel File Path:", filepath);

    // Read Excel Data
    const testdata = ExcelUtils.getTestData(
        filepath,
        'Sheet1'
    );

    // Create Object
    const form = new FormPage(page);

    // Launch URL
    await form.goto();

    // Fill Form Using Excel Data
    await form.fillForm(testdata[0]);
});