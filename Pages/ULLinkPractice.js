import { expect } from "@playwright/test";

export default class ULLinkPractice
{
 constructor(page)
 {
    this.page=page;
    this.coursecontainer=page.locator("//div[@class='container container-fluid']//li");
    this.githublink= this.coursecontainer.filter({ hasText: "GitHub" });
    
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

}
  async newtaburlvalidation()
{
    // Find the container containing GitHub
    const githubContainer =
        this.coursecontainer.filter({
            hasText: "GitHub"
        });

    // Find anchor tag inside that container
    const githubLink =
        githubContainer.locator("a");

    // Print href
    const href =
        await githubLink.getAttribute("href");

    console.log(
        "GitHub href:",
        href
    );

    // Validate href directly
    expect(href).toBe(
        "https://github.com/saucelabs/elemental-next"
    );

    console.log(
        "GitHub href validation passed"
    );
}
}