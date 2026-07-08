import { expect } from "@playwright/test";

export default class PriceSortingHightoLow
{
    constructor(page)
    {
        this.page = page;

        // Username
        this.username =
            page.getByPlaceholder("Username");

        // Password
        this.password =
            page.getByPlaceholder("Password");

        // Login Button
        this.loginButton =
            page.locator("#login-button");

        // Sorting Dropdown
        this.sortDropdown =
            page.locator(".product_sort_container");

        // All Product Prices
        this.productPrices =
            page.locator(".inventory_item_price");
    }


    // Open SauceDemo
    async goto()
    {
        await this.page.goto(
            "https://www.saucedemo.com/"
        );
    }


    // Login
    async login()
    {
        await this.username.fill(
            "standard_user"
        );

        await this.password.fill(
            "secret_sauce"
        );

        await this.loginButton.click();

        await expect(this.page).toHaveURL(
            "https://www.saucedemo.com/inventory.html"
        );

        console.log("Login Successful");
    }


    // =========================================
    /* LOW TO HIGH SORTING VALIDATION
    // =========================================

    async validateLowToHighSorting()
    {
        // Step 1 -> Select Price Low to High
        await this.sortDropdown.selectOption("lohi");

        console.log(
            "Selected: Price Low to High"
        );


        // Step 2 -> Create empty array
        let actualPrices = [];


        // Step 3 -> Count total price elements
        const priceCount =
            await this.productPrices.count();

        console.log(
            "Total Products:",
            priceCount
        );


        // Step 4 -> Loop through all prices
        for(let i = 0; i < priceCount; i++)
        {
            // Step 5 -> Read price text

            const priceText =
                await this.productPrices
                    .nth(i)
                    .textContent();


            // Step 6 -> Remove $ sign
            // and convert string to number

            const price =
                parseFloat(
                    priceText.replace("$", "")
                );


            // Step 7 -> Add price into array

            actualPrices.push(price);


            // Step 8 -> Print each price

            console.log(
                `Product ${i + 1}: $${price}`
            );
        }


        // Step 9 -> Print actual UI order

        console.log(
            "Actual Low to High Order:",
            actualPrices
        );


        // Step 10 -> Create expected sorted copy

        const expectedPrices =
            [...actualPrices]
                .sort((a, b) => a - b);


        // Step 11 -> Print expected order

        console.log(
            "Expected Low to High Order:",
            expectedPrices
        );


        // Step 12 -> Compare arrays

        expect(actualPrices)
            .toEqual(expectedPrices);


        console.log(
            "Low to High Sorting Validation Passed"
        );
    } */


    // =========================================
    // HIGH TO LOW SORTING VALIDATION
    // =========================================

    async validateHighToLowSorting()
    {
        // Step 1 -> Select Price High to Low

        await this.sortDropdown.selectOption("hilo");

        console.log(
            "Selected: Price High to Low"
        );


        // Step 2 -> Create empty array

        let actualPrices = [];


        // Step 3 -> Count price elements

        const priceCount =
            await this.productPrices.count();

        console.log(
            "Total Products:",
            priceCount
        );


        // Step 4 -> Loop through all prices

        for(let i = 0; i < priceCount; i++)
        {
            // Step 5 -> Get price text

            const priceText =
                await this.productPrices
                    .nth(i)
                    .textContent();


            // Step 6 -> Remove $ and convert to number

            const price =
                parseFloat(
                    priceText.replace("$", "")
                );


            // Step 7 -> Store price in array

            actualPrices.push(price);


            // Step 8 -> Print price

            console.log(
                `Product ${i + 1}: $${price}`
            );
        }


        // Step 9 -> Print actual UI order

        console.log(
            "Actual High to Low Order:",
            actualPrices
        );


        // Step 10 -> Create expected descending order

        const expectedPrices =
            [...actualPrices]
                .sort((a, b) => b - a);


        // Step 11 -> Print expected order

        console.log(
            "Expected High to Low Order:",
            expectedPrices
        );


        // Step 12 -> Compare arrays

        expect(actualPrices)
            .toEqual(expectedPrices);


        console.log(
            "High to Low Sorting Validation Passed"
        );
    }
}
