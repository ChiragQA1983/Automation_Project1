import {expect} from '@playwright/test';

export default class DoubleClickPage
{
  constructor(page)
  {
    this.page=page;
    this.CopyTextBtnDblClk=page.locator("//button[normalize-space()='Copy Text']");
    this.field1=page.locator('#field1');

  }
 
async goto()
{
    await this.page.goto('https://testautomationpractice.blogspot.com/');

}

async DoubleClickValidation()
{

    await this.CopyTextBtnDblClk.dblclick();
    await expect(this.field1).toHaveValue(/Hello World!/);
}










}
