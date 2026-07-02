import { expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

export default class ULlinkscount
{
    constructor(page)
    {
        this.page = page;

        this.ULLinkContainer =
            page.locator("//div[@id='content']//ul/li/a");
    }

    async goto()
    {
        await this.page.goto(
            "https://the-internet.herokuapp.com/"
        );
    }

    async validatetheullinks()
{
    const total=await this.ULLinkContainer.count();
    console.log("Total Links Count Is:", total);
    await expect(total).toBe(44);

    let found=false;

    for(let i=0; i<total; i++)
    {
        const totallinks=(await this.ULLinkContainer.nth(i).textContent())?.trim();
        console.log(`Link Texts are ${i+1}: ${totallinks}`)

    if(totallinks==="Checkboxes")
    {
         found=true;
         console.log("Checkbox Link is Found");
         break;

    }        
    }     
    expect(found).toBeTruthy();
}
   
}