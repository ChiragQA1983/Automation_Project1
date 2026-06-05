import{expect} from '@playwright/test';

export default class NextBatchesPage
{
   constructor(page)
   {
    this.page=page;
    this.onelinetrainingbtn = page.locator("//a[normalize-space()='Online Trainings']");
    this.nexpage=page.locator("//a[normalize-space()='Next Batches']");
    this.nextbatch=page.locator("//span[normalize-space()='Upcoming Batches']");
   }
async goto()
{
    await this.page.goto("https://testautomationpractice.blogspot.com/");
}

async nextbatchesvalidation()
{
    await this.onelinetrainingbtn.click();
    await expect(this.page).toHaveURL("https://www.pavanonlinetrainings.com");
    await this.nexpage.click();
    await expect(this.nextbatch).toContainText(/Upcoming Batches/i);

}
}
