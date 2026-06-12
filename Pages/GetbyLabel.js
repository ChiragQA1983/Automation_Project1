import {expect} from '@playwright/test';

export default class GetbyLabel
{
   constructor(page)
   {
     this.page=page;
     this.Email=page.getByLabel("Email Address:");
     this.Password=page.getByLabel("Password:");
     this.Age=page.getByLabel("Your Age:");
     this.Standard=page.getByLabel("Standard");
     this.express=page.getByLabel(" Express");
   
   }
 
   async goto()
   {
       await this.page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")

   }    
 
   async getbylabelvalidation()
{
    // Email
    await this.Email.fill("Chirag.Bhatt102@gmail.com");
    await expect(this.Email)
        .toHaveValue("Chirag.Bhatt102@gmail.com");

    // Password
    await this.Password.fill("Chirag@123");
    await expect(this.Password)
        .toHaveValue("Chirag@123");

    // Age
    await this.Age.fill("3");
    await expect(this.Age)
        .toHaveValue("3");

    // Standard Radio Button
    await this.Standard.check();
    await expect(this.Standard)
        .toBeChecked();

    // Express Radio Button
    await this.express.check();
    await expect(this.express)
        .toBeChecked();

    // Since Express is selected,
    // Standard should become unchecked
    await expect(this.Standard)
        .not.toBeChecked();
}
}
