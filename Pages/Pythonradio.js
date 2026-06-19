import { expect } from "@playwright/test";


export default class Pythonradio
{
  constructor(page)
  {
        this.page=page;
        this.Pythoncourse=page.locator("//label[normalize-space()='Python']");
        this.tablecontent=page.locator("//table[@id='courses_table']//tbody//td[3]");

  }
 
 async goto()
 {
    await this.page.goto("https://practicetestautomation.com/practice-test-table/");
 } 

async pythonradiobuttonvalidation()
{
    const pythontext=await this.tablecontent.count();

    let pythoncoursefilter=0;
    
    for(let i=0; i<pythontext; i++)
    {
        const pythonprint=await this.tablecontent.nth(i).textContent();
        console.log("Python Course is:", pythonprint);

     if(pythonprint?.trim()==="Python")   
     {
            pythoncoursefilter++;
            console.log("Python course is :", pythoncoursefilter);

     }   
    }   
       await this.Pythoncourse.click();
       await expect(pythoncoursefilter).toBeGreaterThan(0);
       console.log("Total Python Course Count is:", pythoncoursefilter);
      
       await expect(pythoncoursefilter).toBe(2);

}

}
