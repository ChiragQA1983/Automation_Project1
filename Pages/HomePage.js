import { expect } from '@playwright/test';

class HomePage {

    constructor(page) {

        this.page = page;

        this.homepagetitletext = page.getByRole('heading', {
            name: 'Automation Testing Practice'
        });

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

    async HomePageValidation() {

        await expect(this.page).toHaveURL('https://testautomationpractice.blogspot.com/');

        await expect(this.homepagetitletext).toBeVisible();

        await expect(this.homepagetitletext)
            .toContainText('Automation Testing Practice');

    }

}

export default HomePage;