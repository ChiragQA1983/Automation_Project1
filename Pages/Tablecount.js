import{expect} from '@playwright/test';

export default class Tablecount
{

constructor(page)
{
    this.page=page;
    this.rowfifthttdfirst=page.locator("//table[@id='courses_table']//tbody//tr[5]//td[1]");
    this.rowfifthttdfifth=page.locator("//table[@id='courses_table']//tbody//tr[5]//td[5]");
}

async goto()
{

    await this.page.goto("https://practicetestautomation.com/practice-test-table/")
}

async tableidvalidation()
{
    
  /* Method 1
  const actualID=await this.rowfifthttdfirst.textContent();
  const actualEnrollment =await this.rowfifthttdfifth.textContent();

  await console.log("Row Fifth First TD Is:", actualID );
  await console.log("Row Fifth TD Fifth Is:", actualEnrollment)
  
  await expect(actualID?.trim()).toBe('2854476');
  await expect(actualEnrollment?.trim()).toBe('8254');*/

 const ID=await this.rowfifthttdfirst.textContent();
 const Enrollment =await this.rowfifthttdfifth.textContent();

await expect(ID?.trim() === '2854476' && Enrollment?.trim() === '8254').toBeTruthy();

}
}
