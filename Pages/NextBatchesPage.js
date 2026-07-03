import{expect} from '@playwright/test';

export default class NextBatchesPage
{
   constructor(page)
   {
    this.page=page;
    this.onelinetrainingbtn = page.locator("//a[normalize-space()='Online Trainings']");
    this.nexpage=page.locator("//a[normalize-space()='Next Batches']");
    this.nextbatch=page.locator("//span[normalize-space()='Upcoming Batches']");
    
        // Advertisement
        this.adPopup = page.locator("#adModal");
        this.adCloseBtn = page.locator("#adCloseBtn");
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
async closeAdvertisementIfPresent()
    {
        try
        {
            if(await this.adPopup.isVisible({ timeout: 3000 }))
            {
                console.log("Advertisement Popup Found");

                await this.adCloseBtn.click();

                await expect(this.adPopup).toBeHidden();

                console.log("Advertisement Popup Closed");
            }
        }
        catch
        {
            console.log("Advertisement Popup Not Displayed");
        }
    }

}
