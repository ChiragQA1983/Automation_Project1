import { expect } from "@playwright/test";

export default class WikipediaSearchPage
{
    constructor(page)
    {
        this.page = page;

        // Search Textbox
        this.searchtextbox = page.locator('#Wikipedia1_wikipedia-search-input');

        // Search Button
        this.searchbutton = page.locator('//input[@type="submit"]');

        // Search Result
        this.searchresult = page.locator('.wikipedia-search-results');
    }

    async goto()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async WikipediaSearchValidation()
    {
        // Fill search text
        await this.searchtextbox.fill('Playwright');

        // Click search button
        await this.searchbutton.click();

        // Wait for result
        await this.page.waitForTimeout(3000);

        // Validate result is visible
        await expect(this.searchresult).toContainText('Playwright');
    }
}