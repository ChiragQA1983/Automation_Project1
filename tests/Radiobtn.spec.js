import { test } from '@playwright/test';

import RadiobtnAny from '../Pages/RadiobtnAny';

test("Validation of Any", async ({ page }) => {

    const radiobtnany = new RadiobtnAny(page);

    await radiobtnany.goto();

    await radiobtnany.Radiobtnvalidation();

});