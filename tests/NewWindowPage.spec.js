import { test } from '@playwright/test';

import NewWindowPage from '../Pages/NewWindowPage';

test('Validate Popup Window', async ({ page }) => {

    const newwindowpage = new NewWindowPage(page);

    await newwindowpage.goto();

    await newwindowpage.NewWindowValidation();

});