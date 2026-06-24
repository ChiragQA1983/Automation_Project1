import { test } from '@playwright/test';
import Sortfilter from '../Pages/Sortfilter';




test(
    'Validate Enrollment Sorting',
    async ({ page }) =>
{
    const sort =
        new Sortfilter(page);

    await sort.goto();

    await sort.selectEnrollmentSorting();

    await sort.validateEnrollmentSorting();
});
