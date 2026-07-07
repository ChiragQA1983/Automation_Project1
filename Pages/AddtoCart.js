import { expect } from '@playwright/test';

export default class AddtoCart
{
    constructor(page)
    {
        this.page = page;

        // Login Page Locators
        this.username =
            page.getByPlaceholder("Username");

        this.password =
            page.getByPlaceholder("Password");

        this.loginbtn =
            page.locator("#login-button");


        // Inventory Page Locators
        this.logo =
            page.locator(".app_logo");

        this.Inventorylinkscontainer =
            page.locator(".inventory_item_label a");


        // Product Details Page Locators
        this.backbutton =
            page.locator("#back-to-products");

        this.addtocart =
            page.locator("#add-to-cart");

        this.remove =
            page.locator("#remove");


        // Cart Locators
        this.addtocartcontainer =
            page.locator("#shopping_cart_container");

        this.cartBadge =
            page.locator(".shopping_cart_badge");
    }


    // Step 1 -> Open SauceDemo Website
    async goto()
    {
        await this.page.goto(
            "https://www.saucedemo.com/"
        );
    }


    // Step 2 -> Login and Validate Add/Remove Cart Functionality
    async inventorylinksvalidation()
    {
        // ==========================================
        // LOGIN
        // ==========================================

        await this.username.fill("standard_user");

        await this.password.fill("secret_sauce");

        await this.loginbtn.click();


        // Validate Logo
        await expect(this.logo)
            .toBeVisible();


        // Validate Inventory Page URL
        await expect(this.page)
            .toHaveURL(
                "https://www.saucedemo.com/inventory.html"
            );


        // ==========================================
        // COUNT TOTAL PRODUCTS
        // ==========================================

        const productlinkcount =
            await this.Inventorylinkscontainer.count();


        console.log(
            "Total Products Count:",
            productlinkcount
        );


        expect(productlinkcount)
            .toBe(6);


        // ==========================================
        // SEARCH FLEECE JACKET USING FOR LOOP
        // ==========================================

        let found = false;


        for(let i = 0; i < productlinkcount; i++)
        {
            const totalproduct =
                (
                    await this.Inventorylinkscontainer
                        .nth(i)
                        .textContent()
                )?.trim();


            console.log(
                `Product Name ${i + 1}: ${totalproduct}`
            );


            if(
                totalproduct ===
                "Sauce Labs Fleece Jacket"
            )
            {
                console.log(
                    "Yes, Sauce Labs Fleece Jacket is Available"
                );


                found = true;


                // Product found, stop the loop
                break;
            }
        }


        // Validate Product Was Found
        expect(found)
            .toBeTruthy();


        console.log(
            "Fleece Jacket Search Validation Passed"
        );


        // ==========================================
        // OPEN BOLT T-SHIRT PRODUCT
        // ==========================================

        await this.Inventorylinkscontainer
            .filter({
                hasText: "Sauce Labs Bolt T-Shirt"
            })
            .click();


        // Validate Product Details URL
        await expect(this.page)
            .toHaveURL(
                "https://www.saucedemo.com/inventory-item.html?id=1"
            );


        console.log(
            "Bolt T-Shirt Product Details Page Opened"
        );


        // ==========================================
        // ADD PRODUCT TO CART
        // ==========================================

        await this.addtocart.click();


        // Validate Remove Button Appears
        await expect(this.remove)
            .toBeVisible();


        // Validate Cart Badge Shows 1
        await expect(this.cartBadge)
            .toHaveText("1");


        console.log(
            "Product Added to Cart Successfully"
        );


        // ==========================================
        // VISUAL HOLD - OPTIONAL
        // ==========================================

        await this.page.waitForTimeout(4000);


        // ==========================================
        // REMOVE PRODUCT
        // ==========================================

        await this.remove.click();


        // ==========================================
        // VALIDATE PRODUCT REMOVAL
        // ==========================================

        // Remove button should disappear
        await expect(this.remove)
            .toHaveCount(0);


        // Add to Cart button should appear again
        await expect(this.addtocart)
            .toBeVisible();


        // Cart badge should disappear
        await expect(this.cartBadge)
            .toHaveCount(0);


        console.log(
            "Product Removed from Cart Successfully"
        );


        // Optional visual verification
        await this.page.waitForTimeout(2000);
    }
}