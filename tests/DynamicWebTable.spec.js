import { test } from '@playwright/test';

import DynamicWebtable from '../pages/DynamicWebtable';

test('DynamicWebtable', async ({ page }) =>
{
    const table = new DynamicWebtable(page);

    // Open application
    await table.goto();

    // Scroll to table
    await table.scrollToTable();

    // Verify table visible
    await table.verifyTableVisible();

    // Verify row count
    await table.verifyRowCount(4);

    // Verify column count
    await table.verifyColumnCount(5);

    // Validate CPU format
    await table.validateChromeCPUFormat();

    // Validate Memory format
    await table.validateFirefoxMemoryFormat();

    // Verify no empty cells
    await table.verifyNoEmptyCells();

    // Print complete table
    await table.printCompleteTable();
});