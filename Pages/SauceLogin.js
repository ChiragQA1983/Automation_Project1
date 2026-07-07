import{expect} from '@playwright/test';

export default class SauceLogin
{
    constructor(page)
    {
        this.page=page;
        this.Inventorylinkscontainer=page.locator(".inventory_item_label a");
        this.username=page.getByPlaceholder("Username");
        this.password=page.getByPlaceholder("Password");
        this.loginbtn=page.locator("#login-button");
        this.logo=page.locator("//div[@class='app_logo']");
        this.backbutton=page.locator("#back-to-products");
        
    }

async goto()
{
    await this.page.goto("https://www.saucedemo.com/");
}    

async inventorylinksvalidation()
{
      await this.username.fill("standard_user");
      await this.password.fill("secret_sauce");
      await this.loginbtn.click();
      await expect(this.logo).toBeVisible();
      await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
      
   const productlinkcount=await this.Inventorylinkscontainer.count();   
   console.log("Total Products Count:", productlinkcount);
   await expect(productlinkcount).toBe(6);

   let found=false;

   for(let i=0; i<productlinkcount; i++)
    {
      const totalproduct=await this.Inventorylinkscontainer.nth(i).textContent();
      console.log(`Product Name ${i+1}: ${totalproduct}`) 

    if(totalproduct?.trim()==="Sauce Labs Fleece Jacket")
    {
        console.log("Yes, Sauce Labs Fleece Jacket is Available")
        found=true;
        continue;
    }
    
    }  
    await expect(found).toBeTruthy();

   await this.Inventorylinkscontainer.filter({hasText:'Sauce Labs Bolt T-Shirt'}).click();
   await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory-item.html?id=1");
   await this.backbutton.click();
   await expect(this.page).toHaveURL("https://www.saucedemo.com/inventory.html");
}
}