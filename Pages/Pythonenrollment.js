import { expect } from '@playwright/test';

export default class PythonEnrollment
{
    constructor(page)
    {
        this.page = page;

        // Language Filters
        this.pythonRadio =
            page.locator("//input[@value='Python']");

        // Level Filters
        this.beginnerCheckbox =
            page.locator("//input[@value='Beginner']");

        this.intermediateCheckbox =
            page.locator("//input[@value='Intermediate']");

        this.advancedCheckbox =
            page.locator("//input[@value='Advanced']");

        // Enrollment Dropdown
        this.minEnrollmentDropdown =
            page.locator("#enrollDropdown");

        this.tenThousandOption =
            page.locator("//li[@data-value='10000']");

        this.selectedEnrollmentValue =
            page.locator("#enrollDropdown .dropdown-label");

        // Visible rows only
        //this.visibleRows =
           // page.locator("//table[@id='courses_table']//tbody//tr:visible");

           this.visibleRows =page.locator("//table[@id='courses_table']//tbody//tr");
    }

    async goto()
    {
        await this.page.goto("https://practicetestautomation.com/practice-test-table/");
    }

    async applyFilters()
    {
        // Select Python
        await this.pythonRadio.check();

        // Keep Beginner checked
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

        // Open Enrollment Dropdown
        await this.minEnrollmentDropdown.click();

        // Select 10,000+
        await this.tenThousandOption.click();

        // Validate selected value
        await expect(
            this.selectedEnrollmentValue
        ).toContainText("10,000+");

        console.log("Enrollment Filter Applied: 10,000+");

        // Hold for visual verification
        await this.page.waitForTimeout(3000);
    }

    async validateFilteredCourses()
{
    // Wait until table refresh completes
    await this.page.waitForTimeout(2000);

    const rows =
        this.page.locator(
            "//table[@id='courses_table']//tbody/tr"
        );

    const rowCount =
        await rows.count();

    console.log(
        "Total Rows Found:",
        rowCount
    );

    let matchingRows = 0;

    for(let i = 0; i < rowCount; i++)
    {
        const row = rows.nth(i);

        // Skip hidden rows
        if(!(await row.isVisible()))
        {
            continue;
        }

        const language =
            (await row.locator("td").nth(2)
                .textContent())?.trim();

        const level =
            (await row.locator("td").nth(3)
                .textContent())?.trim();

        const enrollmentText =
            (await row.locator("td").nth(4)
                .textContent())?.trim();

        const enrollment =
            parseInt(
                enrollmentText.replace(/,/g, '')
            );

        console.log(
            `Visible Row ${i + 1}: ${language} | ${level} | ${enrollment}`
        );

        expect(language)
            .toBe("Python");

        expect(level)
            .toBe("Beginner");

        expect(enrollment)
            .toBeGreaterThanOrEqual(10000);

        matchingRows++;
    }

    console.log(
        "Matching Rows:",
        matchingRows
    );

    expect(matchingRows)
        .toBeGreaterThan(0);
}
}