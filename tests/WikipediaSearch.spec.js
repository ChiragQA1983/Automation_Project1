import { test } from '@playwright/test';
import WikipediaSearchPage from '../pages/WikipediaSearchPage';

test('Validate Wikipedia Search Functionality', async ({ page }) =>
{
    const wikipedia = new WikipediaSearchPage(page);

    await wikipedia.goto();

    await wikipedia.WikipediaSearchValidation();
});
