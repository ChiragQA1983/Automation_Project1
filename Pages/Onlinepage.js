import { expect } from "@playwright/test";

export default class Onlinepage
{
    constructor(page)
    {
        this.page = page;

        this.onelinetrainingbtn =
            page.locator("//a[normalize-space()='Online Trainings']");

        this.coursecontainer =
            page.locator('.course-info h3:visible');
    }

    async goto()
    {
        await this.page.goto("https://testautomationpractice.blogspot.com/");
    }

    async Onelinetrainingvalidation()
    {
        await this.onelinetrainingbtn.click();

        // Debug
        console.log(await this.coursecontainer.allTextContents());

        // Validate count
        await expect(this.coursecontainer).toHaveCount(3);

        // Validate text
        await expect(this.coursecontainer).toHaveText([
            'AI Powered Playwright with JS/TS',
            'AI Powered Playwright with Python',
            'Generative AI & LLM Testing'
        ]);
    }
}