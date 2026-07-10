import { expect } from "@playwright/test";

export default class PythonCouseContent
{
    constructor(page)
    {
        this.page=page;
        this.Python=page.locator("//input[@value='Python']");
        this.Beginer=page.locator("//input[@value='Beginner']");
        this.Intermediate=page.locator("//label[normalize-space()='Intermediate']");
        this.Advance=page.locator("//label[normalize-space()='Advanced']");
        this.AllLanguage=page.locator("//table[@id='courses_table']//tr/td[3]");
        this.Languages=page.locator("//table[@id='courses_table']//tr/td[3]").filter({visible:true})

    }
async goto()
{
    await this.page.goto("https://practicetestautomation.com/practice-test-table/");
}

async PythonCouseContentValidation()
{
         await this.page.waitForTimeout(2000);
         await this.Python.check();
         await this.page.waitForTimeout(2000);
         await this.Intermediate.uncheck();   
         await this.page.waitForTimeout(2000);
         await this.Advance.uncheck();

    const PrintFilteredLanguage=await this.Languages.count();
    console.log("Print Filtered Languages Cont Is:", PrintFilteredLanguage);
   // await expect(PrintVisibleLanguage).toBe(9)


    //await this.page.scrollIntoViewIfNeeded(this.Languages);
    await this.page.waitForTimeout(2000);
    
   let Python=0;
   for(let i=0; i<PrintFilteredLanguage; i++)
   {
       const Pythonlang=await this.Languages.nth(i).textContent();
       console.log(`All Filtered Languages Are: ${i+1} ${Pythonlang}`);
   
   if(Pythonlang?.trim()==="Python")
    {
        Python++;
        console.log(`Python Language: ${i+1} ${Python}`)
    }    

   } 
     await this.page.waitForTimeout(4000);
     await expect(Python).toBe(2);
}

}