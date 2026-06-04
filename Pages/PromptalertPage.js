import{expect} from '@playwright/test';

export default class PromptalertPage
{
  constructor(page)
  {
      this.page=page;
      this.promptalertbtn = page.locator('#promptBtn');
  }
 
  async goto()
  {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
    
  }

  async PromptAlertValidation()
  {
      this.page.on('dialog', async dialog => {

            console.log('Alert message:', dialog.message());

            // Validate alert text
           await expect(dialog.message()).toContain('Please enter your name:');

            // Click OK
            await dialog.dismiss('I am Chirag Bhatt');

  });
             // Click on Simple Alert button
        await this.promptalertbtn.click();

}
}


