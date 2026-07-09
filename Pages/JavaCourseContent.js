import { expect } from "@playwright/test";


export default class JavaCourseContent
{
    constructor(page)
    {
      this.page=page;
      this.Java=page.locator("//label[normalize-space()='Java']");
      this.Beginer=page.locator("//input[@value='Beginner']");
      this.Intermediate=page.locator("//label[normalize-space()='Intermediate']");
      this.Advance=page.locator("//label[normalize-space()='Advanced']");
      this.AllLanguages=page.locator("//table[@id='courses_table']//tr/td[3]");
      this.TotalVisiblecoursecontent = page.locator("//table[@id='courses_table']//tr/td[3]").filter({ visible: true });

    }

    async goto()
    {
        await this.page.goto("https://practicetestautomation.com/practice-test-table/");
    }

   async coursesvalidation()
    {
         await this.page.waitForTimeout(2000);
         await this.Java.check();
         await this.page.waitForTimeout(2000);
         await this.Intermediate.uncheck();   
         await this.page.waitForTimeout(2000);
         await this.Advance.uncheck();

         //await this.Beginer.check();  
        //await this.page.waitForTimeout(2000);
        
    
   /* await this.page.waitForTimeout(2000);
    if(this.Intermediate.check())
    {
       await this.Intermediate.uncheck();

    }
     await this.page.waitForTimeout(2000);
    if(this.Advance.check())
    {
         await this.Advance.uncheck();
    }   

     await this.page.waitForTimeout(2000);
     await this.Beginer.check();   */
    
   const AllCourseCount=await this.AllLanguages.count(); 
   console.log("Total Course Content Is :", AllCourseCount);
   await expect(AllCourseCount).toBe(9);
   await expect(AllCourseCount).toBeGreaterThan(0);

   for(let k=0; k<AllCourseCount; k++)
    {
        const alllanguagename=await this.AllLanguages.nth(k).textContent();
        console.log(`OTHER ALL LANGUAGE NAME IS: ${k+1} ${alllanguagename}` )
      
    }
    


   const Visiblecoursecontent=await this.TotalVisiblecoursecontent.count();      
   console.log("Total Visible Java Course Content is: ", Visiblecoursecontent);
        
    let JavaCount=0;

    for(let i=0; i<Visiblecoursecontent; i++)
    {
        const allcourse=await this.TotalVisiblecoursecontent.nth(i).textContent();
        //console.log(`COURSE NAME IS: ${i+1} ${allcourse}` )

     if(allcourse?.trim()==="Java")
     {
        

        //const javacount=await this.printjavacountonly.count();
        JavaCount++;
        console.log("Java Count is:", allcourse);
     }  
    
    }    

    console.log("JAVA Count is :", JavaCount)
    await expect(JavaCount).toBeGreaterThan(0);
    await expect(JavaCount).toBe(2);
   
 
    }
}
