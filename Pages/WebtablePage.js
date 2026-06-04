import { expect } from "@playwright/test";

export default class WebTablePage
{
  constructor(page)
  {
    this.page=page;
    this.Tabledata=page.locator("//table[@name='BookTable']//tr[5]/td[4]");
    
  }

  async goto()
  {

    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }

 async Webtabledatavalidation()
 {
   await expect(this.Tabledata).toContainText('3000')

 }
}
