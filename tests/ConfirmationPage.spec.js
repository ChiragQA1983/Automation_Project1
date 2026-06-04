import{test} from '@playwright/test';

import ConfirmationPage from '../Pages/ConfirmationPage';

test('Confirmation Alert Validation', async ({ page }) => {

 const confirmationalert=new ConfirmationPage(page)

 await confirmationalert.goto();

 await confirmationalert.confirmalertvalidation();

});
