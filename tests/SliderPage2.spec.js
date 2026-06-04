import { test } from '@playwright/test';
import SliderPage2 from '../Pages/SliderPage2';

test('Validate slider range update', async ({ page }) => {

    const slider = new SliderPage2(page);

    await slider.goto();

    await slider.moveFirstSliderTo169();

    await slider.moveSecondSliderTo419();

});