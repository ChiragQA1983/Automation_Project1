import { test } from '@playwright/test';
import OnlineTrainingPage from '../Pages/OnlineTrainingPage';

test('Validate Online Training Navigation', async ({ page }) => {

    const onlinetraining = new OnlineTrainingPage(page);

    await onlinetraining.goto();

    await onlinetraining.OnlineTrainingValidation();

});