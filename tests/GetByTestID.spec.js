import { test } from '@playwright/test';
import GetByTestID from '../Pages/GetByTestID';

test.describe('GetByTestID Locator Validation', () =>
{
    test('Validate Profile, Products and Navigation Links', async ({ page }) =>
    {
        // Create Page Object
        const testIDPage = new GetByTestID(page);

        // Launch Application
        await testIDPage.goto();

        // Validate Profile Section
        await testIDPage.validateProfileSection();

        // Validate Products Section
        await testIDPage.validateProducts();

        // Validate Navigation Links
        await testIDPage.validateNavigationLinks();
    });
});