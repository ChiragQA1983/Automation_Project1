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
            .toBe("Java");

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