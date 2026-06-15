import { expect } from "@playwright/test";

export default class GetByTestID
{
    constructor(page)
    {
        this.page = page;

        // Profile Section
        this.JohnDoe = page.getByTestId('profile-name');
        this.JohnDoeEmail = page.getByTestId('profile-email');
        this.EditProfile = page.getByTestId('edit-profile-btn');

        // Product Section
        this.productNames = page.getByTestId('product-name');
        this.productPrices = page.getByTestId('product-price');

        // Navigation Links
        this.HomeLink = page.getByTestId('nav-home');
        this.ProductsLink = page.getByTestId('nav-products');
        this.ContactLink = page.getByTestId('nav-contact');
    }

    async goto()
    {
        await this.page.goto(
            "https://testautomationpractice.blogspot.com/p/playwrightpractice.html"
        );
    }

    async validateProfileSection()
    {
        await expect(this.JohnDoe).toBeVisible();
        await expect(this.JohnDoe).toHaveText("John Doe");

        await expect(this.JohnDoeEmail).toBeVisible();
        await expect(this.JohnDoeEmail)
            .toHaveText("john.doe@example.com");

        await expect(this.EditProfile).toBeVisible();
        await expect(this.EditProfile)
            .toHaveText("Edit Profile");
    }

    async validateProducts()
    {
        const expectedProducts =
        [
            {
                name: "Product A",
                price: "$19.99"
            },
            {
                name: "Product B",
                price: "$29.99"
            },
            {
                name: "Product C",
                price: "$39.99"
            }
        ];

        // Validate counts
        await expect(this.productNames)
            .toHaveCount(expectedProducts.length);

        await expect(this.productPrices)
            .toHaveCount(expectedProducts.length);

        // Validate product name & price mapping
        for(let i = 0; i < expectedProducts.length; i++)
        {
            const actualProductName =
                await this.productNames.nth(i).textContent();

            const actualProductPrice =
                await this.productPrices.nth(i).textContent();

            expect(actualProductName?.trim())
                .toBe(expectedProducts[i].name);

            expect(actualProductPrice?.trim())
                .toBe(expectedProducts[i].price);
        }
    }

    async validateNavigationLinks()
    {
        await expect(this.HomeLink)
            .toHaveText("Home");

        await expect(this.ProductsLink)
            .toHaveText("Products");

        await expect(this.ContactLink)
            .toHaveText("Contact");
    }

    async validateByTestID()
    {
        await this.validateProfileSection();

        await this.validateProducts();

        await this.validateNavigationLinks();
    }
}