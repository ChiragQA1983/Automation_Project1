import { expect } from "@playwright/test";

export default class Onlinepage
{
    constructor(page)
    {
        this.page = page;

        // Online Trainings Link
        this.onlineTrainingBtn =
            page.locator("//a[normalize-space()='Online Trainings']");

        // Advertisement Popup
        this.popupCloseButton =
            page.locator("#adCloseBtn");

        // Course Titles (Current locator)
   this.courseTitles = page.locator(".course-info h3");
    }

    async goto()
    {
        await this.page.goto(
            "https://testautomationpractice.blogspot.com/"
        );
    }

    async closeTrainingPopup()
    {
        try
        {
            await this.popupCloseButton.waitFor({
                state: "visible",
                timeout: 10000
            });

            console.log("Popup Found");

            await this.popupCloseButton.click();

            console.log("Popup Closed");

            await expect(this.popupCloseButton)
                .toBeHidden();
        }
        catch
        {
            console.log("Popup Not Displayed");
        }
    }

    async OnlineTrainingValidation()
    {
        // Step 1
        await this.onlineTrainingBtn.click();

        // Step 2
        await this.page.waitForLoadState("networkidle");

        // Step 3
        await this.closeTrainingPopup();

        // Step 4
        await this.page.waitForTimeout(3000);

        // Debug
        const count =
            await this.courseTitles.count();

        console.log("Course Count:", count);

        const courses =
            await this.courseTitles.allTextContents();

        console.log("Courses Found:");

        for(let i = 0; i < courses.length; i++)
        {
            console.log(
                `Course ${i + 1}: ${courses[i]}`
            );
        }

        // Validation
        expect(courses.length)
            .toBe(2);

        expect(courses)
            .toEqual([
                "AI Powered Playwright with JS/TS",
                //"AI Powered Playwright with Python",
                "Generative AI & LLM Testing"
            ]);

        console.log(
            "Course Validation Passed"
        );
    }
}