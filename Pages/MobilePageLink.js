import { expect } from '@playwright/test';

export default class MobilePageLink {

    constructor(page) {

        this.page = page;

        this.apple = page.locator('#apple');
        this.lenovo = page.locator('#lenovo');
        this.dell = page.locator('#dell');
    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async AppleMobileLinkValidation() {

        await expect(this.apple).toBeVisible();

        await this.apple.click();

        await expect(this.page).toHaveURL('https://www.apple.com/');

        await this.page.goBack();
    }

    async LenovoMobileLinkValidation() {

        await expect(this.lenovo).toBeVisible();

        await this.lenovo.click();

        await expect(this.page).toHaveURL(/lenovo/);

        await this.page.goBack();
    }

    async DellMobileLinkValidation() {

        await expect(this.dell).toBeVisible();

        await this.dell.click();

        await expect(this.page).toHaveURL(/dell/);
    }
}