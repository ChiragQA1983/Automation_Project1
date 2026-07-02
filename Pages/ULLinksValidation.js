import { expect } from "@playwright/test";

export default class ULLinksValidation
{
  constructor(page)
  {
     this.page=page;
     this.UIAnchorElements=page.locator("//div[@class='container container-fluid']//a[@class='footer__link-item']");

  }

 async goto()
{
    await this.page.goto("https://elementalselenium.com/");
}

async AnchorLinksValidation()
{
   const totalcount=await this.UIAnchorElements.count();
   console.log("Total Anchor Links Are:", totalcount);
   await expect(totalcount).toBe(7);   

   let found=false;

   for(let i=0; i<totalcount; i++)
   {
      const totallinks=await this.UIAnchorElements.nth(i).textContent();
      console.log(`AnchorText Are: ${i+1} ${totallinks}`);

    if(totallinks?.trim()==="GitHub")
    {
         found=true;
         console.log("GitHub Text Found")
         //break;
         continue;
    }   
    
   }
 expect(found).toBeTruthy();
  //await expect(this.UIAnchorElements.filter({hasText:"GitHub"})).toHaveCount(1); 
}
}

