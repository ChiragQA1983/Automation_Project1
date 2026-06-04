import { test } from '@playwright/test';

import HomePage from '../Pages/HomePage';

test('Validate Home Page Navigation', async ({ page }) => {

    const homepage = new HomePage(page);

    await homepage.goto();

    await homepage.HomePageValidation();

});