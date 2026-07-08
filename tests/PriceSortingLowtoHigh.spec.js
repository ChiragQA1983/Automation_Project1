import { test } from "@playwright/test";

import PriceSortingLowtoHigh from "../Pages/PriceSortingLowtoHigh";


test(
    "Validate Product Price Low to High Sorting",
    async ({ page }) =>

    {
        const pricesortinglowtohigh =
            new PriceSortingLowtoHigh(page);

         // Open Website
        await pricesortinglowtohigh.goto();


        // Login
        await pricesortinglowtohigh.login();
    

        // Validate Low to High
        await pricesortinglowtohigh
            .validateLowToHighSorting();
    }
);


