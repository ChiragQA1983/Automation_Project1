import { expect } from "@playwright/test";

export default class ULLinkPractice
{
 constructor(page)
 {
    this.page=page;
    this.coursecontainer=page.locator("//div[@class='container container-fluid']//li");
    
 }

async goto()
{
    await this.page.goto("https://elementalselenium.com/");
}

async courseullinksvalidation()
{
 const totalcount=await this.coursecontainer.count();
 console.log("Total UL Links Count:",totalcount); 
 await expect(totalcount).toBe(7);
 

let found=false;

 for(let i=0; i<totalcount; i++)
    {
     const total=await this.coursecontainer.nth(i).textContent();
     console.log(`LINKS ${i+1}: ${total}`);

  if(total?.trim()==="GitHub")
   {
       found=true;
       console.log("GitHub is Found");
       break;

   }    
    }  
 await expect(found).toBeTruthy();
 await expect(this.coursecontainer.filter({hasText:"GitHub"})).toHaveCount(1);

}
}
