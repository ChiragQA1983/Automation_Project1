import { test } from '@playwright/test';

import PaginationPage from '../Pages/PaginationPage';

test('Validate pagination click for Page 2', async ({ page }) => {

    const pagination = new PaginationPage(page);

    await pagination.goto();

    await pagination.clickPage2();

    await pagination.validatePage2IsActive();

});
