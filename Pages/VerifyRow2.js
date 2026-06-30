import{expect} from '@playwright/test';

export default class VerifyRow2
{
    constructor(page)
    {
        this.page=page;
        this.addbutton=page.locator("#add_btn");
        this.confirmationmsg=page.locator("//div[@id='confirmation']");
        this.row2textbox=page.locator("//div[@id='row2']//input[@type='text']");
    }

 async goto()
 {
    await this.page.goto("https://practicetestautomation.com/practice-test-exceptions/")
 }

 async validatenewaddedrow2()
 {
    await this.addbutton.click();
    await expect(this.confirmationmsg).toBeVisible();
    await expect(this.confirmationmsg).toContainText(/Row 2 was added/i);
    await this.page.waitForTimeout(4000);
    await expect(this.row2textbox).toBeVisible();

 }
}

