import { test } from "@playwright/test";

import iFrame from "../Pages/iFrame";

test(
    "Validation of iframe text",
    async ({ page }) =>
    {
        const iframe =
            new iFrame(page);

        // Open Website
        await iframe.goto();

        // Validate iframe text
        await iframe.iframeTextValidation();
    }
);