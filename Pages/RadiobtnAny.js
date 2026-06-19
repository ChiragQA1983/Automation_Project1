import { expect } from '@playwright/test';

export default class RadiobtnAny
{
    constructor(page)
    {
        this.page = page;

        // Language Column
        this.LanguageCells =
            page.locator("//table[@id='courses_table']//tbody//td[3]");
    }

    async goto()
    {
        await this.page.goto(
            "https://practicetestautomation.com/practice-test-table/"
        );
    }

    async Radiobtnvalidation()
    {
        const rowCount =
            await this.LanguageCells.count();

        console.log(
            "Total Language Records:",
            rowCount
        );

        let anyCount = 0;

        for(let i = 0; i < rowCount; i++)
        {
            const language =
                await this.LanguageCells
                    .nth(i)
                    .textContent();

            console.log(
                `Row ${i + 1}: ${language?.trim()}`
            );

            if(language?.trim() === "Any")
            {
                anyCount++;
            }
        }

        console.log(
            "Total count of Any is:",
            anyCount
        );

        expect(anyCount).toBeGreaterThan(0);

        // Exact validation
        expect(anyCount).toBe(1);
    }
}