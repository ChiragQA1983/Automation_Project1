import { test } from '@playwright/test';
import BeginnerFilter from '../../Pages/BeginnerFilter';

test(
    'Validation of Java Course',
    async ({ page }) =>
{
    const beginnerFilter =
        new BeginnerFilter(page);

    await beginnerFilter.goto();

    await beginnerFilter.Javafiltervalidation();
});