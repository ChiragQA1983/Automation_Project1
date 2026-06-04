import { test } from '@playwright/test';
import DropdownPage from '../Pages/DropdownPage';

test('Validate Item 2 selection from dropdown', async ({ page }) => {

    const dropdown = new DropdownPage(page);

    await dropdown.goto();

    await dropdown.comboboxvalidation();

});
