import{expect} from '@playwright/test';

export default class TableContentVerify
{

    constructor(page)
    {
        this.page=page;
        this.AdvancedSelenium=page.locator("//table[@id='courses_table']//tbody//tr[4]//td[2]");
        this.fifthelment=page.locator("//table[@id='courses_table']//tbody//tr[4]//td[5]");
        
    }

 async goto()
 {
    await this.page.goto("https://practicetestautomation.com/practice-test-table/");
 }   

async TableContentValidation()
{
   const course=await this.AdvancedSelenium.textContent();
   const enrollment=await this.fifthelment.textContent();

   await expect(course?.trim()).toBe("Advanced Selenium");
   console.log("Course Content Text is:", course)

   await expect(enrollment?.trim()).toBe("16452");
   console.log("Enrollment number is:", enrollment)
}

}
