import { expect } from "@playwright/test";

export default class AjaxPageLink {

    constructor(page) {

        this.page = page;

        // Locators
        this.headingtext = page.getByRole('heading', { name: 'Hidden Elements & AJAX' });

        this.inputbox1 = page.locator("//input[@id='input1']").first();

        this.inputbox2 = page.locator("//input[@id='input2']").first();

        this.toggleinputbutton = page.locator('#toggleInput');

        this.statusmsg = page.locator('#statusLabel');
    }

    // Launch URL
    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/p/gui-elements-ajax-hidden.html');

    }

    // Complete Validation
    async hiddenElementValidation() {

        // Verify heading
        await expect(this.headingtext).toContainText('Hidden Elements & AJAX');

        // Fill Input Box 1
        await this.inputbox1.fill('Chirag');

        // Verify initial status
        await expect(this.statusmsg).toContainText('Ready');

        // Click Toggle Button
        await this.toggleinputbutton.click();

        // Validate Input Box 2 becomes visible
        await expect(this.inputbox2).toBeVisible();

        // Validate status message
        await expect(this.statusmsg)
        .toContainText(/Input Box 2 Shown/i);

        // Fill Input Box 2
        await this.inputbox2.fill('Bhatt');

        // Hide Input Box 2 again
        await this.toggleinputbutton.click();

        // Validate hidden status
        await expect(this.statusmsg)
            .toContainText(/Input Box 2 hidden/i);

        // Validate Input Box 2 is hidden
        await expect(this.inputbox2).toBeHidden();
    }
}