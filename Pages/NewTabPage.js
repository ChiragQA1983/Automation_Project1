import { expect } from '@playwright/test';

export default class NewTabPage {

    constructor(page) {

        this.page = page;

        this.newtabbutton = page.getByRole('button', { name: 'New Tab' });

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

    async Newtabvalidation() {

        // Wait for new tab/page
        const [newPage] = await Promise.all([

            this.page.context().waitForEvent('page'),

            this.newtabbutton.click()

        ]);

        // Wait until page fully loads
        await newPage.waitForLoadState();

        // Validate URL
        await expect(newPage).toHaveURL('https://www.pavantestingtools.com/');

        // Validate page title
        await expect(newPage).toHaveTitle(/SDET-QA Blog/);

        console.log('New Tab URL:', await newPage.url());

    }

}