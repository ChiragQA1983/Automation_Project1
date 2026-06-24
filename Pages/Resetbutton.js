import { expect } from '@playwright/test';

export default class Resetbutton
{
    constructor(page)
    {
        this.page = page;

        // Language Radio Buttons
        this.Anyradiobtn =
            page.locator("//input[@value='Any']");

        this.Javaradiobtn =
            page.locator("//input[@value='Java']");

        this.Pythonradiobtn =
            page.locator("//input[@value='Python']");

        // Level Checkboxes
        this.Beginner =
            page.locator("//input[@value='Beginner']");

        this.intermediate =
            page.locator("//input[@value='Intermediate']");

        this.Advance =
            page.locator("//input[@value='Advanced']");

        // Reset Button
        this.Resetbtn =
            page.locator("#resetFilters");

        // Enrollment Label
        this.minenrollmentAnylbl =
            page.locator(".dropdown-label");

        // Table Rows
        this.tablerows =
            page.locator("//table[@id='courses_table']//tbody/tr");
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async RestButtonValidation()
    {
        // Step 1 - Change filter
        await this.Javaradiobtn.check();

        // Step 2 - Verify Reset button becomes visible
        await expect(this.Resetbtn)
            .toBeVisible();

        console.log(
            "Reset Button is visible after filter change"
        );

        // Step 3 - Click Reset button
        await this.Resetbtn.click();

        // Step 4 - Verify default Language = Any
        await expect(this.Anyradiobtn)
            .toBeChecked();

        // Step 5 - Verify all Levels checked
        await expect(this.Beginner)
            .toBeChecked();

        await expect(this.intermediate)
            .toBeChecked();

        await expect(this.Advance)
            .toBeChecked();

        // Step 6 - Verify Enrollment = Any
        await expect(this.minenrollmentAnylbl)
            .toContainText("Any");

        console.log(
            "Default filters restored successfully"
        );

        // Step 7 - Verify Reset button hidden
        await expect(this.Resetbtn)
            .toBeHidden();

        console.log(
            "Reset Button is hidden"
        );

        // Step 8 - Verify all rows visible
        const rowCount =
            await this.tablerows.count();

        console.log(
            "Total Rows:",
            rowCount
        );

        expect(rowCount)
            .toBeGreaterThan(0);

        /* Optional: Print rows
        for(let i = 0; i < rowCount; i++)
        {
            const row =
                this.tablerows.nth(i);

            if(await row.isVisible())
            {
                console.log(
                    `Row ${i + 1} is visible`
                );*/
            }
        }
    
