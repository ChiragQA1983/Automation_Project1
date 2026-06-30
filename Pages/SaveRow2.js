import {expect} from '@playwright/test';

export default class SaveRow2{

    constructor(page)
    {
        this.page=page;
      
        this.addbutton = page.locator("#add_btn");
        this.confirmationmsg=page.locator("//div[@id='confirmation']");
        this.row2textbox=page.locator("//div[@id='row2']//input[@type='text']");
        this.editbtn=page.locator("//div[@id='row2']//button[@id='edit_btn']");
        this.savebtn=page.locator("//div[@id='row2']//button[@id='save_btn']");
        //this.row2edittextbox=page.locator("//div[@id='row2']//input[@type='text']")
        this.saveconfirmationmsg=page.locator("//div[normalize-space()='Row 2 was saved']");
    }

 async goto()
 {
    await this.page.goto("https://practicetestautomation.com/practice-test-exceptions/")
 }

 async validatenewaddedrow2()
 {
    //await this.addbtn.scrollIntoViewIfneeded();
    await this.addbutton.click();
    await expect(this.confirmationmsg).toBeVisible();
    await expect(this.confirmationmsg).toContainText(/Row 2 was added/i);
    
    await this.row2textbox.waitFor({ state: "visible" });
    //await expect(this.row2textbox).toBeVisible();
    await expect(this.row2textbox).toBeEditable();
    await this.row2textbox.fill("Chirag");

  
    await this.savebtn.click();
    await expect(this.saveconfirmationmsg).toBeVisible();
    await expect(this.saveconfirmationmsg).toContainText("Row 2 was saved");

 }
}


