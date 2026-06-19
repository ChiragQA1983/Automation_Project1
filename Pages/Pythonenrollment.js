import { expect } from '@playwright/test';

export default class PythonEnrollment
{
    constructor(page)
    {
        this.page = page;

        // Filters
        this.pythonRadio = page.locator("//input[@value='Python']");
        this.beginnerCheckbox = page.locator("//input[@value='Beginner']");
        this.intermediateCheckbox = page.locator("//input[@value='Intermediate']");
        this.advancedCheckbox = page.locator("//input[@value='Advanced']");

        // Table Columns
        this.languageCells = page.locator("//table[@id='courses_table']//tbody//td[3]");
        this.levelCells = page.locator("//table[@id='courses_table']//tbody//td[4]");
        this.enrollmentCells = page.locator("//table[@id='courses_table']//tbody//td[5]");
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async applyFilters()
    {
        await this.pythonRadio.check();
        await this.page.waitForTimeout(3000);

        if(await this.intermediateCheckbox.isChecked())
        {
            await this.intermediateCheckbox.uncheck();
        }

        if(await this.advancedCheckbox.isChecked())
        {
            await this.advancedCheckbox.uncheck();
        }

        console.log( "Python Checked:", await this.pythonRadio.isChecked());
        console.log("Intermediate Checked:", await this.intermediateCheckbox.isChecked());
        console.log("Advanced Checked:", await this.advancedCheckbox.isChecked());
        await this.page.waitForTimeout(3000);
    }

    async validateFilteredCourses()
    {
        const rowCount = await this.languageCells.count();
        console.log("Total Rows:", rowCount);

        let matchingRows = 0;

        for(let i = 0; i < rowCount; i++)
        {
            const language = (await this.languageCells.nth(i).textContent())?.trim();

            const level = (await this.levelCells.nth(i).textContent())?.trim();

            const enrollmentText = (await this.enrollmentCells.nth(i).textContent())?.trim();

            const enrollment = parseInt(enrollmentText.replace(/,/g, ''));

            console.log(
                `Row ${i + 1}: ${language} | ${level} | ${enrollment}`
            );

            if(
                language === "Python" &&
                level === "Beginner" &&
                enrollment >= 10000
            )
            {
                matchingRows++;

                console.log(`Matched Row ${i + 1}`
                );
            }
        }
        console.log("Total Matching Rows:", matchingRows);
        expect(matchingRows).toBeGreaterThan(0);
       await this.page.waitForTimeout(3000);

    }
}