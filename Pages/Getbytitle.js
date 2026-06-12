import { expect } from "@playwright/test";

export default class Getbytitle
{
    constructor(page)
    {
    
    this.page = page;

    this.Home = page.getByTitle('Home page link');

    this.HTML = page.getByTitle('HyperText Markup Language');

    this.Tooltip = page.getByTitle('Tooltip text');

    this.Save=page.getByTitle('Click to save your changes');
    }

    async goto()
    {
        await this.page.goto(
            "https://testautomationpractice.blogspot.com/p/playwrightpractice.html"
        );
    }

    async validatetitles()
{
    await expect(this.Home).toBeVisible();
    await expect(this.Home).toHaveAttribute('title','Home page link');
      

    await expect(this.HTML).toBeVisible();
    await expect(this.HTML).toHaveAttribute('title','HyperText Markup Language');
        
    await expect(this.Tooltip).toBeVisible();
    await expect(this.Tooltip).toHaveAttribute('title','Tooltip text');

    await expect(this.Save).toBeVisible();
    await expect(this.Save).toHaveAttribute('title','Click to save your changes');
            
}
    }
