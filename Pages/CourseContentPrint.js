import { expect } from "@playwright/test";

export default class CourseContentPrint
{
    constructor(page)
    {
        this.page=page;
        this.Level=page.locator("//table[@id='courses_table']//tbody//td[4]");
    }
 async goto()
 {
    await this.page.goto("https://practicetestautomation.com/practice-test-table/")
 }   

 async courselevelvalidation()
 {
   //it will print the total Course Count Number
   const rowcount=await this.Level.count();
   console.log("Total Course Content Count Is:", rowcount);

   let BeginnerCount=0;
   
   for(let i=0; i<rowcount; i++)
   {
     const coursename=await this.Level.nth(i).textContent();
     //console.log("Total Course Count is:", rowcount); 
   
     if(coursename?.trim()==="Beginner")
     {
      //it will print the Beginner count with it's name
         BeginnerCount++;
         console.log("Beginner count is:", coursename);
     }
   }
    
   //It will print the total beginner count
    console.log('Total Beginner Course is', BeginnerCount);
    expect(BeginnerCount).toBeGreaterThan(0);

   // await expect(BeginnerCount).toHaveCount(5)

    // It will print the total beginner count
   console.log('Total Beginner Course is', BeginnerCount);

   await expect(BeginnerCount).toBe(5);

 }
}