import { expect } from "@playwright/test";

export default class SimplealertPage {

    constructor(page) {

        this.page = page;
        this.simplealertbtn = page.locator('#alertBtn');

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

    async Alertbuttonclick() {

        // Handle alert popup
        this.page.on('dialog', async dialog => {

            console.log('Alert message:', dialog.message());

            // Validate alert text
            expect(dialog.message()).toBe('I am an alert box!');

            // Click OK
            await dialog.accept();

        });

        // Click on Simple Alert button
        await this.simplealertbtn.click();

    }

}