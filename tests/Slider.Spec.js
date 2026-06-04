import { test } from '@playwright/test';
import SliderPage from '../Pages/SliderPage';

test('Validate first slider moves from 0 to 169', async ({ page }) => {

    const slider = new SliderPage(page);

    await slider.goto();

    await slider.moveFirstSliderTo169();

});