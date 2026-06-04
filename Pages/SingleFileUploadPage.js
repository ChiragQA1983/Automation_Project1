import { expect } from '@playwright/test';
import path from 'path';

// path.join() --> Function
// filepath --> Variable/Object storing file path
const filepath = path.join(__dirname, '../tests/testdata/sample.pdf');

// Class
export default class SingleFileUploadPage {

    // Constructor Method
    constructor(page) {

           // page --> Object received from Playwright fixture
        this.page = page;

          // Locator Objects
        this.choosefilebtn = page.locator('#singleFileInput');

        this.uploadsinglefile = page.locator("//button[text()='Upload Single File']");

        this.fileuploadstatus = page.locator('#singleFileStatus');

    }
    // goto() --> Method
    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }
// FileUploadValidation() --> Method
    async FileUploadValidation() {

        // Wait for file input
        await this.choosefilebtn.waitFor();

       // setInputFiles() --> Function
        await this.choosefilebtn.setInputFiles(filepath);

       // expect() --> Function
        // toHaveValue() --> Assertion Function
        await expect(this.choosefilebtn)
            .toHaveValue(/sample.pdf/);

             // click() --> Function
        await this.uploadsinglefile.click();

         // expect() --> Function
        // toContainText() --> Assertion Function
        await expect(this.fileuploadstatus)
            .toContainText('Single file selected');

    }
}