import { expect } from "@playwright/test";

export default class JavaEnrollment
{
    constructor(page)
    {
        this.page = page;

        // Language Radio Button
        this.javaRadio =
            page.locator("//input[@value='Java']");

        // Level Checkboxes
        this.beginnerCheckbox =
            page.locator("//input[@value='Beginner']");

        this.intermediateCheckbox =
            page.locator("//input[@value='Intermediate']");

        this.advancedCheckbox =
            page.locator("//input[@value='Advanced']");

        // Min Enrollment Dropdown
        this.minEnrollmentDropdown =
            page.locator("#enrollDropdown");

        this.tenThousandOption =
            page.locator("//li[@data-value='10000']");

        this.selectedEnrollmentValue =
            page.locator("#enrollDropdown .dropdown-label");

        // Table Rows
        this.visibleRows  =page.locator("//table[@id='courses_table']//tbody//tr");
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async applyFilters()
    {
        // Select Java
        await this.javaRadio.check();

        await expect(
            this.javaRadio
        ).toBeChecked();

        // Beginner should remain checked
        await expect(
            this.beginnerCheckbox
        ).toBeChecked();

        // Uncheck Intermediate
        if(await this.intermediateCheckbox.isChecked())
        {
            await this.intermediateCheckbox.uncheck();
        }

        // Uncheck Advanced
        if(await this.advancedCheckbox.isChecked())
        {
            await this.advancedCheckbox.uncheck();
        }

        await expect(
            this.intermediateCheckbox
        ).not.toBeChecked();

        await expect(
            this.advancedCheckbox
        ).not.toBeChecked();

        // Select 10,000+
        await this.minEnrollmentDropdown.click();

        await this.tenThousandOption.click();

        // Validate Dropdown Selection
        await expect(
            this.selectedEnrollmentValue
        ).toContainText("10,000+");

        console.log(
            "Java + Beginner + 10,000+ Filter Applied"
        );

        // Visual verification
        await this.page.waitForTimeout(3000);
    }
    async validateFilteredCourses()
{
    // Step 1 -> Wait for table to refresh after applying filters
    await this.page.waitForTimeout(2000);

    // Step 2 -> Locate all table rows
    const row =
        this.page.locator(
            "//table[@id='courses_table']//tbody//tr"
        );

    // Step 3 -> Count total rows
    const rowcount =
        await row.count();

    console.log(
        "Total row count:",
        rowcount
    );

    // Step 4 -> Variable to count matching rows
    let matchingrow = 0;

    // Step 5 -> Loop through each row
    for(let i = 0; i < rowcount; i++)
    {
        // Step 6 -> Get current row using index
        const rows =
            row.nth(i);

        // Step 7 -> Skip hidden rows
        if(!(await rows.isVisible()))
        {
            continue;
        }

        // Step 8 -> Read Language column value
        const language =
            (await rows
                .locator("td")
                .nth(2)
                .textContent())?.trim();

        // Step 9 -> Read Level column value
        const level =
            (await rows
                .locator("td")
                .nth(3)
                .textContent())?.trim();

        // Step 10 -> Read Enrollment column value
        const enrollmenttext =
            (await rows
                .locator("td")
                .nth(4)
                .textContent())?.trim();

        // Step 11 -> Convert Enrollment text into number
        const enrollment =
            parseInt(
                enrollmenttext.replace(/,/g,'')
            );

        // Step 12 -> Print visible row data
        console.log(
            `Visible Row ${i + 1} | ${language} | ${level} | ${enrollment}`
        );

        // Step 13 -> Validate Language
        expect(language)
            .toBe("Java");

        // Step 14 -> Validate Level
        expect(level)
            .toBe("Beginner");

        // Step 15 -> Validate Enrollment >= 10000
        expect(enrollment)
            .toBeGreaterThanOrEqual(10000);

        // Step 16 -> Increase matching row count
        matchingrow++;
    }

    // Step 17 -> Print total matching rows
    console.log(
        "Matching Rows:",
        matchingrow
    );

    // Step 18 -> Verify at least one matching row exists
    expect(matchingrow)
        .toBeGreaterThan(0);
}
}

/*
1. Locate all rows
2. Count rows
3. Loop through rows
4. Ignore hidden rows
5. Read Language, Level and Enrollment
6. Validate values
7. Increase matching count
8. Verify at least one matching row found
*/