import { test, expect } from "@playwright/test";

test("Validate mandatory fields using for...of loop", async ({ page }) =>
{
    // Step 1 -> Open the application
    await page.goto(
        "https://demoqa.com/automation-practice-form"
    );

    // Step 2 -> Click Submit without entering data
    await page.locator("#submit").click();

    // Step 3 -> Store all mandatory field details
    const mandatoryFields =
    [
        {
            name: "First Name",
            locator: "#firstName"
        },
        {
            name: "Last Name",
            locator: "#lastName"
        },
        {
            name: "Male Radio Button",
            locator: "#gender-radio-1"
        },
        {
            name: "Female Radio Button",
            locator: "#gender-radio-2"
        },
        {
            name: "Other Radio Button",
            locator: "#gender-radio-3"
        }
    ];

    // Step 4 -> Loop through every mandatory field
    for(const field of mandatoryFields)
    {
        // Step 5 -> Locate current field
        const textbox =
            page.locator(field.locator);

        // Step 6 -> Ask browser whether field is valid
        const isInvalid =
            await textbox.evaluate(element =>
            {
                const isValid =
                    element.checkValidity();

                return !isValid;
            });

        // Step 7 -> Print result
        console.log(
            `${field.name} Invalid : ${isInvalid}`
        );

        // Step 8 -> Validate field is invalid
        expect(isInvalid).toBeTruthy();
    }

    console.log(
        "All Mandatory Fields Validation Passed"
    );
});