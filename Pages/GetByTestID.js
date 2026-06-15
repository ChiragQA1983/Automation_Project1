import { expect } from "@playwright/test";

export default class GetByTestID
{
    constructor(page)
    {
        this.page=page;
        this.JohnDoe=page.getByTestId('profile-name');
        this.JohnDoeEmail=page.getByTestId('profile-email');
        this.EditProfile=page.getByTestId('edit-profile-btn');
        this.productname=page.getByTestId('product-name').filter({hasText:'Product A'});
        this.productprice=page.getByTestId('product-price').filter({hasText:'$19.99'});

    }

async goto()
{
    await this.page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html#");

}

async ValidatebyTestID()
{
     await expect(this.JohnDoe).toBeVisible();
     await expect(this.JohnDoe).toHaveText("John Doe");

     await expect(this.JohnDoeEmail).toBeVisible();
     await expect(this.JohnDoeEmail).toHaveText("john.doe@example.com");

     await expect(this.EditProfile).toBeVisible();
     await expect(this.EditProfile).toHaveText("Edit Profile");

     await expect(this.productname).toHaveCount(1);
     await expect(this.productname).toHaveText("Product A");


}
}
