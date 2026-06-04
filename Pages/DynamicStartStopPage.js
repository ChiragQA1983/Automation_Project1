import{expect} from '@playwright/test';

export default class DynamicStartStopPage {

    constructor(page)
    {
        this.page=page;
        this.StartButton=page.getByRole('button',{name: 'START'})
        this.StopButton=page.getByRole('button',{name: 'STOP'})
     }

  async goto()
  {
    await this.page.goto('https://testautomationpractice.blogspot.com/')
  }  

  async StartButtonClickValidation()
  {
    
    await this.StartButton.click();
    await expect(this.StopButton).toBeVisible();
    await expect(this.StopButton).toContainText('STOP');   

   } 

}
