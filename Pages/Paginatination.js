import { expect } from '@playwright/test';

export default class Pagination
{
   constructor(page)
   {
      this.page = page;

      this.secondpagebtn = page.locator("//a[normalize-space()='2']");
      this.thirdpagebtn = page.locator("//a[normalize-space()='3']");
      this.fourthpagebtn = page.locator("//a[normalize-space()='4']");
      this.firstpagebtn = page.locator("//a[normalize-space()='1']");

      this.tabletext = page.locator("//table[@id='productTable']//tr[td='Smart Home Hub']");

      this.Checkboxtick = page.locator("//table[@id='productTable']//tr[2]//td[4]//input[@type='checkbox']");
   }

   async goto()
   {
      await this.page.goto("https://testautomationpractice.blogspot.com/");
   }

   async Paginationvalidation()
   {
      await expect(this.thirdpagebtn).toBeVisible();

      await this.thirdpagebtn.click();

      await expect(this.tabletext).toContainText("Smart Home Hub");
   }

   async checkboxcheck()
   {
      await expect(this.Checkboxtick).toBeVisible();

      await this.Checkboxtick.check();

      await expect(this.Checkboxtick).toBeChecked();
   }
}