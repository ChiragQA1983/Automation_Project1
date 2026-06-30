import { expect } from "@playwright/test";

export default class Sortbycoursename
{
    constructor(page)
    {
        this.page=page;
             // Sort Dropdown
        this.sortDropdown = page.locator("#sortBy");
        this.coursename=page.locator("//table[@id='courses_table']//tbody//td[2]");   


    }

async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }
async selectCourseSorting()
    {
        // Select Enrollments option
        await this.sortDropdown.selectOption("col_course");

        console.log("Sort By = Course Selected");

        await this.page.waitForTimeout(2000);
    }

async ValidateCourseSorting()
{
    // Step 1 -> Create an empty array to store enrollment numbers
    let actualcourses = [];

    // Step 2 -> Count total enrollment cells in the table
    const rowCount = await this.coursename.count();
    console.log("Total Rows:", rowCount);

    // Step 3 -> Loop through each enrollment cell
    for(let i = 0; i < rowCount; i++)
    {
        // Step 4 -> Read enrollment text from current row
        const courseText = await this.coursename.nth(i).textContent();

        // Step 5 -> Remove comma and convert text into number
       // Step 5 -> Remove extra spaces
        const courses = courseText.trim();

        // Step 6 -> Add enrollment number into array
        actualcourses.push(courses);

        // Step 7 -> Print current row enrollment value
        console.log(`Row ${i + 1}: ${courses}`);
    }

    // Step 8 -> Print actual enrollment order from table
    console.log("Actual Order:", actualcourses);

    // Step 9 -> Create a copy of array and sort it in ascending order
    const expectedOrder =[...actualcourses].sort((a, b) => a - b);

    // Step 10 -> Print expected sorted order
    console.log("Expected Order:", expectedOrder);

    // Step 11 -> Compare actual table order with expected sorted order
    expect(actualcourses).toEqual(expectedOrder);

    // Step 12 -> Print success message
    console.log("Courses Sorting Validation Passed");
}
}




