import { expect } from '@playwright/test';

export default class CourseTable
{
    constructor(page)
    {
        this.page = page;

        // Language Column
        this.languageCells =
            page.locator("//table[@id='courses_table']/tbody/tr/td[3]");
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async validateJavaCourses()
    {
        const rowCount =
            await this.languageCells.count();

        console.log("Total Rows:", rowCount);

        let javaCount = 0;

        for(let i = 0; i < rowCount; i++)
        {
            const language =
                await this.languageCells
                    .nth(i)
                    .textContent();

            console.log(
                `Row ${i + 1}: ${language}`
            );

            if(language?.trim() === "Java")
            {
                javaCount++;
            }
        }

        console.log(
            `Total Java Courses: ${javaCount}`
        );

        expect(javaCount)
            .toBeGreaterThan(0);
    }
}