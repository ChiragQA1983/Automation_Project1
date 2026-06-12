import{expect} from '@playwright/test';

export default class GetbyAltText
{
   constructor(page)
   {
     this.page=page;
     this.Logo=page.getByAltText("logo image");
     this.AltTextValidate=page.getByText("Playwright Logo"); 
   }
async goto()
{
    await this.page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
}

async validatelogoandtext()
{
   await expect(this.Logo).toBeVisible();
   await expect(this.AltTextValidate).toBeVisible();
   await expect(this.AltTextValidate).toContainText("Playwright Logo");
   await expect(this.Logo).toHaveAttribute('alt', 'logo image');
   await expect(this.Logo).toHaveAttribute('src', /playwright-logo\.svg/);
}

}