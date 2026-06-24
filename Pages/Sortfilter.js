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
        await this.sortDropdown.selectOption("col_enroll");

        console.log("Sort By = Enrollments Selected");

        await this.page.waitForTimeout(2000);
    }

    async validateEnrollmentSorting()
{
    // Step 1 -> Create an empty array to store enrollment numbers
    let actualEnrollments = [];

    // Step 2 -> Count total enrollment cells in the table
    const rowCount = await this.enrollmentCells.count();
    console.log("Total Rows:", rowCount);

    // Step 3 -> Loop through each enrollment cell
    for(let i = 0; i < rowCount; i++)
    {
        // Step 4 -> Read enrollment text from current row
        const enrollmentText = await this.enrollmentCells.nth(i).textContent();

        // Step 5 -> Remove comma and convert text into number
        const enrollment = parseInt(enrollmentText.trim().replace(/,/g, ''));

        // Step 6 -> Add enrollment number into array
        actualEnrollments.push(enrollment);

        // Step 7 -> Print current row enrollment value
        console.log(`Row ${i + 1}: ${enrollment}`);
    }

    // Step 8 -> Print actual enrollment order from table
    console.log("Actual Order:", actualEnrollments);

    // Step 9 -> Create a copy of array and sort it in ascending order
    const expectedOrder =[...actualEnrollments].sort((a, b) => a - b);

    // Step 10 -> Print expected sorted order
    console.log("Expected Order:", expectedOrder);

    // Step 11 -> Compare actual table order with expected sorted order
    expect(actualEnrollments).toEqual(expectedOrder);

    // Step 12 -> Print success message
    console.log("Enrollment Sorting Validation Passed");
}
}