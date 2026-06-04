import { expect } from "@playwright/test";

export default class PlaywrightPractice {

    constructor(page)
    {
        this.page = page;

        this.PlaywrightPractice = page.getByRole('link', { name: 'PlaywrightPractice' });

        this.lendingpagetext = page.locator("//span[normalize-space()='For Selenium, Cypress & Playwright']");
    }

    async goto()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async PlaywrightPracticeNavValidation()
    {
        await this.PlaywrightPractice.click();
        await expect(this.lendingpagetext).toContainText('For Selenium, Cypress & Playwright');
    }
}