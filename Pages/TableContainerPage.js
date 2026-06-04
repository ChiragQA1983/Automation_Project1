import {expect} from '@playwright/test';

export default class TableContainerPage
{
    constructor(page)
    {
        this.page=page;
        this.tablcontainer=page.locator('.table-container')
        this.table2Raw=page.locator("//table[@name='BookTable'] //tr[2]/td[3]")
    }

    async goto()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

   async WebtableValidation()
   {
       await expect(this.table2Raw).toContainText(/Selenium/);
   }
}
