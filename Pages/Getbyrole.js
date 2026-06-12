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
     this.textcontent=page.getByText('Locate elements by their text content.');
     this.textcontentpractice=page.getByText('colored text');
     this.link=page.getByRole("link",{name:'link'});
     this.textvalidation=page.getByText("Click the button above to submit your information.");
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

    await expect(this.textcontent).toContainText('Locate elements by their text content.');
    await expect(this.textcontentpractice).toContainText(/colored text/i);

    await this.link.click();
    await expect(this.page).toHaveURL("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");
    await expect(this.textvalidation).toContainText("Click the button above to submit your information.");
    
   }
}
