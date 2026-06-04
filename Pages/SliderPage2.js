import { expect } from '@playwright/test';

export default class SliderPage2 {

    constructor(page) {

        this.page = page;

        // First Slider
        this.firstSlider = page.locator('#slider-range span').nth(0);

        // Second Slider
        this.secondSlider = page.locator('#slider-range span').nth(1);

        // Price textbox
        this.priceText = page.locator('#amount');

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

  // Move First Slider
async moveFirstSliderTo169() {

    await expect(this.firstSlider).toBeVisible();

    await this.firstSlider.click();

    // Increase slider value
    for (let i = 1; i <= 38; i++) {

        await this.firstSlider.press('ArrowRight');

    }

    await this.page.waitForTimeout(1000);

    const value = await this.priceText.inputValue();

    console.log('First Slider Updated Value:', value);

}


// Move Second Slider
async moveSecondSliderTo419() {

    await expect(this.secondSlider).toBeVisible();

    await this.secondSlider.click();

    // Decrease slider value
    for (let i = 1; i <= 16; i++) {

        await this.secondSlider.press('ArrowLeft');

    }

    await this.page.waitForTimeout(1000);

    const value = await this.priceText.inputValue();

    console.log('Second Slider Updated Value:', value);

}
}