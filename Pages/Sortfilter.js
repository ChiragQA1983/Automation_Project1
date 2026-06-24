import { expect } from '@playwright/test';

export default class Sortfilter
{
    constructor(page)
    {
        this.page = page;

        // Sort Dropdown
        this.sortDropdown =
            page.locator("#sortBy");

        // Enrollment Column
        this.enrollmentCells =
            page.locator(
                "//table[@id='courses_table']//tbody//td[5]"
            );
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async selectEnrollmentSorting()
    {
        // Select Enrollments option
        await this.sortDropdown.selectOption(
            "col_enroll"
        );

        console.log(
            "Sort By = Enrollments Selected"
        );

        await this.page.waitForTimeout(2000);
    }

    async validateEnrollmentSorting()
    {
        // Store all enrollments
        let actualEnrollments = [];

        const rowCount =
            await this.enrollmentCells.count();

        console.log(
            "Total Rows:",
            rowCount
        );

        // Read all enrollment values
        for(let i = 0; i < rowCount; i++)
        {
            const enrollmentText =
                await this.enrollmentCells
                    .nth(i)
                    .textContent();

            const enrollment =
                parseInt(
                    enrollmentText
                        .trim()
                        .replace(/,/g, '')
                );

            actualEnrollments.push(
                enrollment
            );

            console.log(
                `Row ${i + 1}: ${enrollment}`
            );
        }

        console.log(
            "Actual Order:",
            actualEnrollments
        );

        // Create sorted copy
        const expectedOrder =
            [...actualEnrollments]
                .sort((a, b) => a - b);

        console.log(
            "Expected Order:",
            expectedOrder
        );

        // Compare both arrays
        expect(actualEnrollments)
            .toEqual(expectedOrder);

        console.log(
            "Enrollment Sorting Validation Passed"
        );
    }
}
