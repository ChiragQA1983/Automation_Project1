
import { test } from '@playwright/test';

import PlaywrightPractice from '../Pages/PlaywrightPractice';

test('Validate Playwright Practice Navigation', async ({ page }) => {

    const playwrightpractice = new PlaywrightPractice(page);

    await playwrightpractice.goto();

    await playwrightpractice.PlaywrightPracticeNavValidation;

});