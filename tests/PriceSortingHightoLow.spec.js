import { test } from "@playwright/test";

import PriceSortingHightoLow from "../Pages/PriceSortingHightoLow. copy";

test(
    "Validate Product Price High to Low Sorting",
    async ({ page }) =>
    {
        const priceSortingHightoLow =
            new PriceSortingHightoLow(page);


        // Open Website
        await priceSortingHightoLow.goto();


        // Login
        await priceSortingHightoLow.login();


        // Validate High to Low
        await priceSortingHightoLow
            .validateHighToLowSorting();
    }
);




/*test(
    "Validate Product Price Low to High Sorting",
    async ({ page }) =>
    {
        const priceSortingHightoLow =
            new PriceSortingHightoLow(page);


        // Open Website
        await priceSortingHightoLow.goto();


        // Login
        await priceSortingHightoLow.login();


        // Validate Low to High
        await priceSortingHightoLow.PriceSortingHightoLow()
            
    }
);*/
