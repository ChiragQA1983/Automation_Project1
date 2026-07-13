import { expect } from "@playwright/test";

export default class iFramechain
{
    constructor(page)
    {
        this.page = page;

        // Parent Frame
        this.parentFrame =
            page.frameLocator("#frame1");

        // Child Frame
        this.childFrame =
            this.parentFrame.frameLocator("iframe");
    }

    async goto()
    {
        await this.page.goto(
            "https://demoqa.com/nestedframes"
        );
    }

    async parentChildIframeValidation()
    {
        // Step 1 -> Read Parent Frame Text

        const parentText =
            await this.parentFrame
                .locator("body")
                .textContent();

        console.log(
            "Parent Frame Text:",
            parentText
        );

        // Step 2 -> Read Child Frame Text

        const childText =
            await this.childFrame
                .locator("p")
                .textContent();

        console.log(
            "Child Frame Text:",
            childText
        );

        // Step 3 -> Validate Child Frame Text

        await expect(
            this.childFrame.locator("p")
        ).toHaveText("Child Iframe");

        console.log(
            "Child Frame Validation Passed"
        );
    }
}