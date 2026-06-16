import {expect} from '@playwright/test'

export default class PracticePage
{
   constructor(page)
   {
    this.page=page;
    this.name=page.locator("#form_first_name_7");
    this.email=page.locator("#form_email_7");
    this.xpathbtn=page.locator("//input[@value='Get XPath cheat sheet']")
    this.alertmsg1=page.locator("//li[normalize-space()='This field is required.']").nth(0);
    this.alertmsg2=page.locator("//li[normalize-space()='This field is required.']").nth(1);
   }
async goto()
{
    await this.page.goto("https://practicetestautomation.com/");
}

async alertmessagevalidation()
{
    await this.xpathbtn.click();
    await expect(this.alertmsg1).toBeVisible();
    await expect(this.alertmsg1).toHaveText(/This field is required./i);
    await expect(this.alertmsg2).toBeVisible();
     await expect(this.alertmsg2).toHaveText(/This field is required./i);

}

}
