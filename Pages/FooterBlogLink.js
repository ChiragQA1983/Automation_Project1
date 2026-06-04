import{expect} from '@playwright/test';

export default class FooterBlogLink
{
   constructor(page)
   {
      this.page=page;
      this.bloglink=page.locator("//a[normalize-space()='Blogger']");

   }

async goto()
{
    await this.page.goto("https://testautomationpractice.blogspot.com/")
}   

async Bloglinknewtabvalidation()
{
      await this.bloglink.scrollIntoViewIfNeeded();

        // Wait for new tab and click together
        const [newPage] = await Promise.all([

            this.page.context().waitForEvent('page'),

            this.bloglink.click()
 ]);
 // Wait until page fully loads
        await newPage.waitForLoadState('domcontentloaded');

        // Validate URL
        await expect(newPage).toHaveURL(
            /blogger.com/
        );

        // Validate Title
        await expect(newPage).toHaveTitle(
            /Blogger.com/
        );

        // Print URL
        console.log(
            'New Tab URL:',
            await newPage.url()
        );

        // Print Title
        console.log(
            'New Tab Title:',
            await newPage.title()
        );

}

}
