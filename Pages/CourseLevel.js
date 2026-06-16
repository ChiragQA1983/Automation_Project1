import { expect } from '@playwright/test';

export default class CourseLevel
{
    constructor(page)
    {
        this.page = page;

        this.CourseLevelCells =
            page.locator("//table[@id='courses_table']//tbody//td[4]");
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async CourseLevelValidation()
    {
        const rowCount =
            await this.CourseLevelCells.count();

        console.log("Total Rows =", rowCount);

        let beginnerCount = 0;

        for(let i = 0; i < rowCount; i++)
        {
            const courseLevel =
                await this.CourseLevelCells
                    .nth(i)
                    .textContent();

            const level = courseLevel?.trim();

            console.log(
                `Row ${i + 1}: ${level}`
            );

            if(level === "Beginner")
            {
                beginnerCount++;
            }
        }

        console.log(
            `Total Beginner Courses = ${beginnerCount}`
        );

        // Optional Assertion
        expect(beginnerCount).toBeGreaterThan(0);
    }
}