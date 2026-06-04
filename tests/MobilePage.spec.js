import { test } from '@playwright/test';

import MobilePageLink from '../Pages/MobilePageLink';

test('Laptop Links Validation', async ({ page }) => {

    const mobilepage = new MobilePageLink(page);

    await mobilepage.goto();

    await mobilepage.AppleMobileLinkValidation();

    await mobilepage.LenovoMobileLinkValidation();

    await mobilepage.DellMobileLinkValidation();

});