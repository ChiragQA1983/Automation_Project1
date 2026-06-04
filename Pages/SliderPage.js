import { expect } from '@playwright/test';

export default class SliderPage {

    constructor(page) {

        this.page = page;

        // First slider handle
        this.slider1 = page.locator('#slider-range span').first();

        // Price range text
        this.priceText = page.locator('#amount');

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

    async moveFirstSliderTo169() {

        // Verify slider visible
        await expect(this.slider1).toBeVisible();

        // Get slider position
        const sliderBox = await this.slider1.boundingBox();

        // Move mouse to slider
        await this.page.mouse.move(
            sliderBox.x + sliderBox.width / 2,
            sliderBox.y + sliderBox.height / 2
        );

        // Hold slider
        await this.page.mouse.down();

        // Drag slider to right side
        await this.page.mouse.move(
            sliderBox.x + 100,
            sliderBox.y,
            { steps: 10 }
        );

        // Release slider
        await this.page.mouse.up();

        // Capture slider value text
        const sliderValue = await this.priceText.textContent();

        // Print value in console
        console.log('Updated Slider Value:', sliderValue);

    }

}