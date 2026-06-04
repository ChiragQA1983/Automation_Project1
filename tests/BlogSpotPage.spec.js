import { test } from '@playwright/test';

import BlogSportPage from '../Pages/BlogSpotPage';

test('Validate Blog Page Navigation', async ({ page }) => {

    const blogSpotPage = new BlogSportPage(page);

    await blogSpotPage.goto();

    await blogSpotPage.BlogValidation();

});