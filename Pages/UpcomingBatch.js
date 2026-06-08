import{expect} from '@playwright/test';

export default class UpcomingBatch
{
  constructor(page)
  {
     this.page=page;
     this.onlinetrainings=page.getByRole("link",{name:'Online Trainings'});
     this.UpcomingBatchlink = page.getByRole('link', {name: 'Upcoming Batches'}).first();
     this.Enrollnow=page.locator("//a[@class='btn btn-primary btn-sm']");
     this.cardcontainer = page.locator('.pricing-card:visible');

  }
async goto()
{
        await this.page.goto("https://testautomationpractice.blogspot.com/")
}

async validateupcomingbatch()
{
      await this.onlinetrainings.click();
      await this.UpcomingBatchlink.click();
      await this.Enrollnow.scrollIntoViewIfNeeded();
      await this.Enrollnow.click();
      await expect(this.cardcontainer).toHaveCount(2);
      await expect(this.cardcontainer.first()).toBeVisible();
}

}
