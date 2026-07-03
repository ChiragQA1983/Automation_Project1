import { expect } from '@playwright/test';

export default class SvgPage
{
    constructor(page)
    {
        this.page = page;

        // SVG Elements
        this.redCircle = page.locator('svg circle');
        this.greenRectangle = page.locator("//*[name()='rect' and contains(@x,'3')]");
        this.blueTriangle = page.locator('svg polygon');
    }

    async goto()
    {
        await this.page.goto(
            'https://testautomationpractice.blogspot.com/p/playwrightpractice.html'
        );
    }

    async validateSvgElements()
    {
        // Visibility Assertions
        await expect(this.redCircle).toBeVisible();
        await expect(this.greenRectangle).toBeVisible();
        await expect(this.blueTriangle).toBeVisible();

        // Attribute Assertions
        await expect(this.redCircle)
            .toHaveAttribute('fill', 'red');

        await expect(this.greenRectangle)
            .toHaveAttribute('fill', 'green');

        await expect(this.blueTriangle)
            .toHaveAttribute('fill', 'blue');
    }
}