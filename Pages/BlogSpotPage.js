import { expect } from "@playwright/test";

class BlogSportPage {

    constructor(page) {

        this.page = page;

        this.BlogPageLink = page.locator("//a[normalize-space()='Blog']");

        this.BlogHeadingText = page.getByRole('heading', {
            name: 'SDET-QA Blog'
        });

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

    async BlogValidation() {

        await this.BlogPageLink.click();

        await expect(this.BlogHeadingText).toBeVisible();

        await expect(this.BlogHeadingText)
            .toContainText('SDET-QA Blog');

    }

}

export default BlogSportPage;