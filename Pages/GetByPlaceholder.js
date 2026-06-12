import{expect} from '@playwright/test';

export default class GetByPlaceholder
{
   constructor(page)
   {
      this.page=page;
      this.EnterFullName=page.getByPlaceholder('Enter your full name');
      this.EnterPhone=page.getByPlaceholder('Phone number (xxx-xxx-xxxx)');
      this.TypeMsg=page.getByPlaceholder('Type your message here...');
      this.SeachProducts=page.getByPlaceholder('Search products...'); 
   }

 async goto()
 {
    await this.page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html")
 }  

 async PlaceholderValidation()
 {
    await this.EnterFullName.fill("Chirag Bhatt");
    await expect(this.EnterFullName).toHaveValue("Chirag Bhatt");

    await this.EnterPhone.fill("9873464646");
    await expect(this.EnterPhone).toHaveValue("9873464646");

    await this.TypeMsg.fill("This is Testing");
    await expect(this.TypeMsg).toHaveValue("This is Testing");

    await this.SeachProducts.fill("Lenovo");
    await expect(this.SeachProducts).toHaveValue("Lenovo");
 }




}
