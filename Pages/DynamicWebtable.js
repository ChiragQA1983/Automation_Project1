import { expect } from '@playwright/test';

export default class DynamicWebtable
{
    constructor(page)
    {
        this.page = page;

        // Table
        this.table = page.locator('#taskTable');

        // Headers
        this.headers = page.locator('#taskTable thead th');

        // Rows
        this.rows = page.locator('#taskTable tbody tr');
    }

    // Navigate
    async goto()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    // Scroll
    async scrollToTable()
    {
        await this.table.scrollIntoViewIfNeeded();
    }

    // Verify table visible
    async verifyTableVisible()
    {
        await expect(this.table).toBeVisible();
    }

    // Verify row count
    async verifyRowCount(expectedRows)
    {
        const rowCount = await this.rows.count();

        console.log("Total Rows:", rowCount);

        expect(rowCount).toBe(expectedRows);
    }

    // Verify column count
    async verifyColumnCount(expectedColumns)
    {
        const columnCount = await this.headers.count();

        console.log("Total Columns:", columnCount);

        expect(columnCount).toBe(expectedColumns);
    }

    // Get column index dynamically
    async getColumnIndex(columnName)
    {
        const headers = await this.headers.allTextContents();

        const columnIndex = headers.findIndex(header =>
            header.trim().includes(columnName)
        );

        console.log(`${columnName} Column Index:`, columnIndex);

        return columnIndex;
    }

    // Validate Chrome CPU format
    async validateChromeCPUFormat()
    {
        const cpuColumnIndex = await this.getColumnIndex('CPU');

        const rowsCount = await this.rows.count();

        for(let i = 0; i < rowsCount; i++)
        {
            const row = this.rows.nth(i);

            const processName = await row.locator('td').nth(0).textContent();

            if(processName.includes('Chrome'))
            {
                const cpuValue = await row.locator('td')
                    .nth(cpuColumnIndex)
                    .textContent();

                console.log("Chrome CPU:", cpuValue);

                // Validate percentage format
                expect(cpuValue.trim()).toMatch(/^\d+(\.\d+)?%$/);
            }
        }
    }

    // Validate Firefox Memory format
    async validateFirefoxMemoryFormat()
    {
        const memoryColumnIndex = await this.getColumnIndex('Memory');

        const rowsCount = await this.rows.count();

        for(let i = 0; i < rowsCount; i++)
        {
            const row = this.rows.nth(i);

            const processName = await row.locator('td').nth(0).textContent();

            if(processName.includes('Firefox'))
            {
                const memoryValue = await row.locator('td')
                    .nth(memoryColumnIndex)
                    .textContent();

                console.log("Firefox Memory:", memoryValue);

                // Validate MB format
                expect(memoryValue.trim()).toMatch(/^\d+(\.\d+)? MB$/);
            }
        }
    }

    // Verify no empty cells
    async verifyNoEmptyCells()
    {
        const rowsCount = await this.rows.count();

        for(let i = 0; i < rowsCount; i++)
        {
            const cells = this.rows.nth(i).locator('td');

            const cellCount = await cells.count();

            for(let j = 0; j < cellCount; j++)
            {
                const cellValue = await cells.nth(j).textContent();

                console.log(`Row ${i+1} Cell ${j+1}: ${cellValue}`);

                expect(cellValue.trim()).not.toBe('');
            }
        }
    }

    // Print table
    async printCompleteTable()
    {
        const rowsCount = await this.rows.count();

        console.log("========= TABLE DATA =========");

        for(let i = 0; i < rowsCount; i++)
        {
            const rowData = await this.rows
                .nth(i)
                .locator('td')
                .allTextContents();

            console.log(`Row ${i+1}:`, rowData);
        }
    }
}