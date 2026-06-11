import {expect} from '@playwright/test';

export default class Getbyrole
{
   constructor(page)
   {
     this.page=page;
     this.Buttons=page.getByRole('Button',{name: "Primary Action"});
     this.togglebutton=page.getByRole('Button',{name:"Toggle Button"});
     this.checkbox=page.getByRole('checkbox',{name:'Accept terms'});    
     this.textbox=page.getByRole('textbox',{name:'Username:'})
     this.labeltext=page.getByLabel('Username:');
     //this.getbyrolelink=page.getByRole('link',{name:'Home'});
     this.Linktext=page.getByRole('link', { name: 'Home' }).nth(0);
     //this.alertmsg=page.getByRole('alert',{name:"This is an important alert message!"});
     this.alertmsg = page.getByRole('alert');

   }
 
   async goto()
   {
       await this.page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#")

   }    
 
   async getbyrolebuttonvalidation()
   {
    //Button       
    await expect(this.Buttons).toBeVisible();
    await expect(this.Buttons).toContainText("Primary Action")

    //Button   
    await expect(this.togglebutton).toBeVisible();
    await expect(this.togglebutton).toContainText("Toggle Button");

    //Checkbox
    await this.checkbox.check();
    await expect(this.checkbox).toBeChecked();
 
    //Textbox
    await this.textbox.fill("Chirag Bhatt");
    await expect(this.textbox).toBeVisible();

    await expect(this.labeltext).toBeVisible();

    //await expect (this.getbyrolelink).toBeVisible();
    await expect(this.Linktext).toBeVisible();
    await expect(this.Linktext).toHaveText('Home');

    await expect(this.alertmsg)
    .toContainText('This is an important alert message!');
   }
}
