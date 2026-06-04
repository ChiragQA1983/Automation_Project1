import { expect } from '@playwright/test';
import path from 'path';

export default class MultifileuploadPage {

    constructor(page) {

        this.page = page;

        this.multifileinput = page.locator('#multipleFilesInput');

        this.uploadbtn = page.getByRole('button', { name: 'Upload Multiple Files' });

        this.statusmsg = page.locator('#multipleFilesStatus');
    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async MultifileUploadValidation() {

        const file1 = path.join(process.cwd(), 'tests/testdata/sample_multifile.pdf');

        const file2 = path.join(process.cwd(), 'tests/testdata/sample_multifile2.pdf');

        // Upload Multiple Files
        await this.multifileinput.setInputFiles([file1, file2]);

        // Click Upload Button
        await this.uploadbtn.click();

        // Validation
        await expect(this.statusmsg)
            .toContainText('Multiple files selected');
    }
}