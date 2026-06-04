import { expect } from "@playwright/test";

export default class ConfirmationPage{
 
constructor(page)
{
  this.page=page;
  this.confirmationalertbtn=page.locator('#confirmBtn')
}

async goto()
{
    await this.page.goto('https://testautomationpractice.blogspot.com/')
}

async confirmalertvalidation()
{
   this.page.on('dialog', async dialog => {

            console.log('Alert message:', dialog.message());

            // Validate alert text
            expect(dialog.message()).toBe('Press a button!');

            // Click OK
            await dialog.accept();
    
  })

  await this.confirmationalertbtn.click();

}

}
