import { expect } from "@playwright/test";

export default class OnlineTrainingPage {

    constructor(page)
    {
        this.page = page;

        this.OnlineTrainingClick = page.getByRole('link', { name: 'Online Trainings' });

        this.lendingpagetext = page.locator("//nav[@id='navbar']//span[@class='logo-name'][normalize-space()='Pavan Online Trainings']");
    }

    async goto()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async OnlineTrainingValidation()
    {
        await this.OnlineTrainingClick.click();
        await expect(this.lendingpagetext).toContainText('Pavan Online Trainings');
    }
}