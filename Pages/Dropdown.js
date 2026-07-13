import{expect, test} from '@playwright/test';

export default class Dropdown
{
    constructor(page)
    {
        this.page=page;
        this.dropdownlist=page.locator("//ul[@class='dropdown-menu']//li");
        this.dropdownlistvisible=page.locator('#enrollDropdown').filter({visible:true});
    }

async goto()
{
  await this.page.goto("https://practicetestautomation.com/practice-test-table/");

}

async dropdownvalidation()
{
    const dpcontentscount=await this.dropdownlist.count();
    console.log(dpcontentscount);
    

    let fivethousand=0;

    for(let i=0; i<dpcontentscount; i++)
     {
        const total=await this.dropdownlist.nth(i).textContent();
        console.log(`Dropdown ${i+1} ${total}`);

    if(total?.trim()==="5,000+")
    {
        fivethousand++;
        break;
        
    }    
     
     }    
     console.log(`Five thousend plus total content is: ${fivethousand}`);


    //console.log(dpcontents);

    //await this.dropdownlist.click();
    //await this.dropdownlistvisible.filter({hasText:'10,000+'}).click();
    //await expect(this.dropdownlistvisible).toContainText("10,000+");
    
}
}
