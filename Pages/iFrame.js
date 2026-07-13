import { expect } from "@playwright/test";

export default class iFrame
{
    constructor(page)
    {
        this.page=page;
        // Step 1 -> Locate the iframe
        this.frameBox = page.frameLocator("#frame1");

        // Step 2 -> Locate the heading inside iframe
        this.sampleFrameHeading = this.frameBox.locator("#sampleHeading");
    }

    async goto()
    {
        await this.page.goto(
            "https://demoqa.com/frames"
        );
    }

    async iframeTextValidation()
    {
    
        await expect(this.sampleFrameHeading).toBeVisible();

        const frametext=await this.sampleFrameHeading.textContent();

        console.log("Frame text is:", frametext);

        await expect(this.sampleFrameHeading).toContainText("This is a sample page"); 
            
  
    }
}