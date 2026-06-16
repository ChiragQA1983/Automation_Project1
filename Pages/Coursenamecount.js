import{expect} from '@playwright/test';

export default class Coursenamecount
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

async PrintCourses()
{
   const rowcount=await this.Level.count();
   console.log("Total Course Name is:", rowcount);
 
   let Cousername = 0;
   
   for(let i=0; rowcount>i; i++ )
   {
      const levelcount=await this.Level.nth(i).textContent();
      console.log("Level Count List is :", levelcount);

     if(levelcount?.trim() === "Advanced")
            {
                Cousername++;
            }
        }

        console.log(
            `Total Advanced Courses: ${Cousername}`
        );

        expect(Cousername)
            .toBeGreaterThan(0);

   }
}
