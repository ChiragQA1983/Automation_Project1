import{expect} from '@playwright/test';

export default class DropdownPage
{
  constructor(page)
  {
    this.page=page;
    this.combobox=page.locator("#comboBox");
    this.item2=page.locator("//div[normalize-space()='Item 2']");
}

async goto()
{
    await this.page.goto("https://testautomationpractice.blogspot.com/")
}

async comboboxvalidation()
{
    await this.combobox.scrollIntoViewIfNeeded();
    await this.combobox.click();
    
    await this.item2.click();
    await expect(this.combobox).toHaveValue('Item 2')
}
}
