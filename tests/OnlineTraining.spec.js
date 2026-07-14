import { test } from '@playwright/test';
import OnlineTrainingPage from '../Pages/OnlineTrainingPage';

test('OnlineTrainingPage Navigation', async ({ page }) => {

    const onlinetraining = new OnlineTrainingPage(page);

    await onlinetraining.goto();

    await onlinetraining.OnlineTrainingValidation();

});