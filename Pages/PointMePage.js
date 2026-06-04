import{expect} from '@playwright/test';

export default class PointMePage{

    constructor(page)
    {

        this.page=page;
        this.PointMeButton=page.getByRole('button',{name: 'Point Me'});
        this.Dropdowncontainer=page.locator(".dropdown-content");
        this.mobileOption=page.locator(".dropdown-content a:text('Mobiles')");
        //  //a[normalize-space()='Mobiles']

         this.LaptopOption=page.locator(".dropdown-content a:text('Laptops')");
         //  //a[normalize-space()='Laptops']
        
    }
  async goto()
  {
    await this.page.goto('https://testautomationpractice.blogspot.com/');
  }
 
  async PointMeButtonValidation()
  {
    await this.PointMeButton.hover();
    await expect(this.Dropdowncontainer).toBeVisible();
    await expect(this.mobileOption).toBeVisible();
    await expect(this.LaptopOption).toBeVisible();
    await expect(this.mobileOption).toContainText('Mobiles');
    await expect(this.LaptopOption).toContainText('Laptops');
  }
}
