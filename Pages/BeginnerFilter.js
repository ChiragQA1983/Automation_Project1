import { expect } from "@playwright/test";

export default class BeginnerFilter
{
    constructor(page)
    {
        this.page = page;

        // Language Column
        this.languageCells =
            page.locator("//table[@id='courses_table']//tbody//td[3]");

        // Java Radio Button (separate section of page)
        this.Javaradiobutton =
            page.locator("//input[@value='Java']");
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async Javafiltervalidation()
    {
        const rowCount =
            await this.languageCells.count();

        console.log(
            "Total Language Rows =",
            rowCount
        );

        let javaCount = 0;

        for(let i = 0; i < rowCount; i++)
        {
            const language =
                await this.languageCells
                    .nth(i)
                    .textContent();

            console.log(
                //`Row ${i + 1}: ${language?.trim()}`
                "This is java count:", javaCount
            );

            if(language?.trim() === "Java")
            {
                javaCount++;
            }
        }

        console.log(
            `Total Java Courses = ${javaCount}`
        );

        expect(javaCount)
            .toBeGreaterThan(0);

        // Optional Radio Button Validation
        await this.Javaradiobutton.check();

        await expect(this.Javaradiobutton)
            .toBeChecked();
    }
}