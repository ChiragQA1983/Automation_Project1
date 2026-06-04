import{expect} from '@playwright/test';

export default class ShadowPage
{
   constructor(page)
   {
     this.page=page;
     this.laptops=page.locator("#nested_shadow_content div");
     this.mobile=page.locator("#shadow_content span");

   }

 async goto()
 {
    await this.page.goto("https://testautomationpractice.blogspot.com/");
 }  
 
async laptopsandmobilestextvalidation()
{
    await this.laptops.scrollIntoViewIfNeeded();
    await expect(this.laptops).toBeVisible();
    await expect(this.laptops).toContainText(/Laptops/i);
    await expect(this.mobile).toBeVisible();
    await expect(this.mobile).toContainText(/Mobiles/i);
} 

}
