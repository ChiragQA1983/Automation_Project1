import { expect } from "@playwright/test";

export default class Anchortag
{
    constructor(page)
    {
        this.page=page;
        this.Anchortagcontainer=page.locator("//div[@class='card card--full-height shadow--md']//a");
     
        

    }

async goto()
{
    await this.page.goto("https://elementalselenium.com/tips")
}    

async Anchortagvalidation()
{
   const totalcount=await this.Anchortagcontainer.count();
   console.log("Total Anchor Tags Count:", totalcount)
   await expect(totalcount).toBe(65);

let found=false;   

for(let i=0; i<totalcount; i++)
{
  const totalanchortext=(await this.Anchortagcontainer.nth(i).textContent())?.trim();
  console.log(`Anchor Text ${i+1}: ${totalanchortext}`);
 
  if(totalanchortext==="71 - The Mobile Testing Pyramid")
   {
       found=true;
       console.log("The Mobile Testing Pyramid is in the container");
       continue;
   }
    
}
   expect(found).toBeTruthy();

   await (this.Anchortagcontainer.filter({hasText:"69 - Safari Driver"})).click();
   
   await expect(this.page.getByRole('heading', { name: 'SafariDriver' })).toBeVisible();  
   //await this.page.waitForTimeout(4000);
  
   await expect(this.page.getByRole('heading',{name:'SafariDriver'})).toContainText(/SafariDriver/i);

}
}
