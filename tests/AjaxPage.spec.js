import { test } from '@playwright/test';

import AjaxPageLink from '../Pages/AjaxPageLink';

test('Validation of AJAX Hidden Elements', async ({ page }) => {

    const ajaxpage = new AjaxPageLink(page);

    await ajaxpage.goto();

    await ajaxpage.hiddenElementValidation();

});