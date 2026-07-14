import { expect } from "@playwright/test";

export default class UdemyPage {

    constructor(page)
    {
        this.page = page;

        this.UdemyClick = page.getByRole('link', { name: 'Udemy Courses' });

        this.lendingpagetext = page.locator("//h2[normalize-space()='Udemy Courses']");
    }

    async goto()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async UdemycoursesValidation()
    {
        await this.UdemyClick.click();
        await expect(this.lendingpagetext).toContainText('Udemy Courses');
    }
}
