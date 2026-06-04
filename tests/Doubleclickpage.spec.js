
import { test } from '@playwright/test';

import DoubleClickPage from '../Pages/DoubleClickPage';

test('Validate Double Click Functionality', async ({ page }) => {

    const doubleclickpage = new DoubleClickPage(page);

    await doubleclickpage.goto();

    await doubleclickpage.DoubleClickValidation();

});