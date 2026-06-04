import { expect } from '@playwright/test';
import path from 'path';

export default class Shadowfileupload
{
    constructor(page)
    {
        this.page = page;

        // File Upload Locator
        this.fileuploadbutton = page.locator('input[type="file"]').first();
    }

    async goto()
    {
        await this.page.goto("https://testautomationpractice.blogspot.com/");
    }

    async shadowfileuploadvalidation()
    {
        // File Path
        const file1 = path.join(process.cwd(), 'tests/testdata/sample.pdf');

        // Wait for file input
        await this.fileuploadbutton.waitFor();

        // Upload File
        await this.fileuploadbutton.setInputFiles(file1);

        // Validate Uploaded File
        await expect(this.fileuploadbutton)
            .toHaveValue(/sample\.pdf$/);
    }
}