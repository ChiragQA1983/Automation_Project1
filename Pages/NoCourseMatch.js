import{expect} from '@playwright/test';

export default class NoCourseMatch
{
    constructor(page)
    {
        this.page=page;
        this.Pythonradio=page.locator("//label[normalize-space()='Python']");
        this.Beginnercheckbox=page.locator("//label[normalize-space()='Beginner']");
        this.intermediate=page.locator("//label[normalize-space()='Intermediate']");
        this.Advanced=page.locator("//input[@value='Advanced']");
        this.NoDataCourses=page.locator("//div[@id='noData']");

    }
async goto()
{
       await this.page.goto("https://practicetestautomation.com/practice-test-table/");
}
async Nocoursevalidation()
{
      await this.Pythonradio.check();

      if(await this.Beginnercheckbox.isChecked())
      {
        await this.Beginnercheckbox.uncheck();
      } 
    
      await expect(this.intermediate).toBeChecked();
      await expect(this.Advanced).toBeChecked();

      await expect(this.NoDataCourses).toContainText("No matching courses.");
   
}
}

