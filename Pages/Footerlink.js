import { expect } from '@playwright/test';

export default class Footerlink
{
    constructor(page)
    {
        this.page = page;

        // Footer Link
        this.merrymoonmerrylink =
            page.locator("//a[normalize-space()='merrymoonmary']");
    }

    // Launch URL
    async goto()
    {
        await this.page.goto(
            "https://testautomationpractice.blogspot.com/"
        );
    }

    async Moonmerryfooterlinkvalidation()
    {
        // Scroll to footer link
        await this.merrymoonmerrylink.scrollIntoViewIfNeeded();

        // Wait for new tab and click together
        const [newPage] = await Promise.all([

            this.page.context().waitForEvent('page'),

            this.merrymoonmerrylink.click()

        ]);

        // Wait until page fully loads
        await newPage.waitForLoadState('domcontentloaded');

        // Validate URL
        await expect(newPage).toHaveURL(
            /istockphoto.com/
        );

        // Validate Title
        await expect(newPage).toHaveTitle(
            /iStock/
        );

        // Print URL
        console.log(
            'New Tab URL:',
            await newPage.url()
        );

        // Print Title
        console.log(
            'New Tab Title:',
            await newPage.title()
        );
    }
}