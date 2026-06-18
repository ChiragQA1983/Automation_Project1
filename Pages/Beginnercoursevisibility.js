import {expect} from '@playwright/test';

export default class Beginnercoursevisibility
{
    constructor(page)
    {
        this.page=page;
        this.intermediateradiobtn=page.locator("//label[normalize-space()='Intermediate']");
        this.advancebtn=page.locator("//label[normalize-space()='Advanced']");
        this.levelofcourses=page.locator("//table[@id='courses_table']//tbody//td[4]");
    }

async goto()
{
    await this.page.goto("https://practicetestautomation.com/practice-test-table/");
}

async beginnercoursevalidation()
{
    const levelcheck=await this.levelofcourses.count();
    console.log("Total count is:", levelcheck);
 
   let Beginneronly=0;
   
   for(let i=0; i<levelcheck; i++)
   {
      const beginner=await this.levelofcourses.nth(i).textContent();
      console.log("Beginner count", beginner );
  
     if(beginner?.trim() ==="Beginner")   
    {
        Beginneronly++;
        console.log("This is only beginner", Beginneronly);
    }
    }
    console.log("Beginner Count Is:", Beginneronly);
   
    await expect(Beginneronly).toBeGreaterThan(0);


    await this.intermediateradiobtn.uncheck();
    await this.advancebtn.uncheck();

    await expect(this.intermediateradiobtn).not.toBeChecked();
    await expect(this.advancebtn).not.toBeChecked();

    // It will print the total beginner count
  
  console.log(
        `Total Beginner Courses = ${Beginneronly}`
    );
 expect(Beginneronly).toBe(5);
}
}





