import { expect } from '@playwright/test';

export default class PaginationPage {

    constructor(page) {

        this.page = page;

        this.page2Button = page.locator('#pagination li a').filter({ hasText: '2' });

        this.activePage = page.locator('#pagination li a.active');

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

    async clickPage2() {

        await this.page2Button.scrollIntoViewIfNeeded();

        await this.page2Button.click();

    }

    async validatePage2IsActive() {

        await expect(this.activePage).toHaveText('2');

    }

}
