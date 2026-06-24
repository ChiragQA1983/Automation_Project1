import {expect} from '@playwright/test';

export default class Printcoursename
{
    constructor(page)
    {
        this.page=page;
        this.languages=page.locator("//table[@id='courses_table']//tbody//tr//td[3]");
        this.beginner=page.locator("//label[normalize-space()='Beginner']");
        this.entiretable=page.locator("//table[@id='courses_table']//tbody//tr");
        this.intermediate=page.locator("//label[normalize-space()='Intermediate']");
        this.advanced=page.locator("//label[normalize-space()='Advanced']");
        this.java=page.locator("//label[normalize-space()='Java']");

    }
async goto()
{
    await this.page.goto("https://practicetestautomation.com/practice-test-table/");
}

async PrintCourseNameValidation()

{

    await this.java.check();
    // Uncheck Intermediate
        if(await this.intermediate.isChecked())
        {
            await this.intermediate.uncheck();
        }

        // Uncheck Advanced
        if(await this.advanced.isChecked())
        {
            await this.advanced.uncheck();
        }

    //await this.page.WaitforTimeOut(2000);

const rowcount=this.page.locator("//table[@id='courses_table']//tbody/tr");

 const rowCount = await rowcount.count();

    console.log("Total Rows Found:", rowCount);

         let matchingRows = 0;

  for(let i = 0; i < rowCount; i++)
    {
        const row = rowcount.nth(i);

        // Skip hidden rows
        if(!(await row.isVisible()))
        {
            continue;
        }
        const language = (await row.locator("td").nth(2).textContent())?.trim();

        const level = (await row.locator("td").nth(3).textContent())?.trim();
        console.log(`Visible Row ${i + 1}: ${language} | ${level}`);

              expect(language).toBe("Java");
              expect(level).toBe("Beginner");
              matchingRows++;
    }
        
    console.log("Matching Rows:",matchingRows);
    expect(matchingRows).toBeGreaterThan(0);

}
}