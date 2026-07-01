import { expect } from "@playwright/test";

export default class Onlinepage
{
    constructor(page)
    {
        this.page = page;

        // Online Trainings Menu
        this.onlineTrainingBtn =
            page.locator("//a[normalize-space()='Online Trainings']");

        // All Course Titles (Do NOT use :visible)
        this.courseTitles =
            page.locator(".course-info h3");

        // Optional Advertisement Close Button
        this.closeAdvertisement =
            page.locator("button[aria-label='Close'], .close");
    }

    async goto()
    {
        await this.page.goto(
            "https://testautomationpractice.blogspot.com/"
        );
    }

    async OnlineTrainingValidation()
    {
        // Step 1 - Open Online Trainings page
        await this.onlineTrainingBtn.click();

        // Step 2 - Wait for page to load
        await this.page.waitForLoadState("networkidle");

        // Step 3 - Close advertisement if present
        if(await this.closeAdvertisement.count() > 0)
        {
            if(await this.closeAdvertisement.first().isVisible())
            {
                await this.closeAdvertisement.first().click();
            }
        }

        // Step 4 - Wait for course cards
        await expect(this.courseTitles.first()).toBeVisible();

        // Step 5 - Print all course names
        const courses =
            await this.courseTitles.allTextContents();

        console.log("Courses Found:");

        courses.forEach((course, index) =>
        {
            console.log(`Course ${index + 1}: ${course}`);
        });

        // Step 6 - Validate total courses
        expect(courses.length).toBe(3);

        // Step 7 - Validate course names
        expect(courses).toEqual([
            "AI Powered Playwright with JS/TS",
            "AI Powered Playwright with Python",
            "Generative AI & LLM Testing"
        ]);

        console.log("All Course Validation Passed Successfully.");
    }
}