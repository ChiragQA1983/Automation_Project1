import { expect } from "@playwright/test";

export default class NewWindowPage {

    constructor(page) {

        this.page = page;

        this.newwindowbtn = page.locator('#PopUp');

    }

    async goto() {

        await this.page.goto('https://testautomationpractice.blogspot.com/');

    }

    async NewWindowValidation() {

        // Wait for popup + click
        const [newWindow] = await Promise.all([

            this.page.waitForEvent('popup'),

            this.newwindowbtn.click()

        ]);

        // Wait for popup fully loaded
        await newWindow.waitForLoadState('domcontentloaded');

        // Capture URL
        const popupURL = await newWindow.url();

        console.log("Popup URL:", popupURL);

        // Flexible URL validation
        expect(
            popupURL.includes('selenium') ||
            popupURL.includes('playwright')
        ).toBeTruthy();

        // Title validation
        const pageTitle = await newWindow.title();

        console.log("Popup Title:", pageTitle);

        // Ensure title is not empty
        expect(pageTitle.length).toBeGreaterThan(0);

        // Optional H1 validation
        const heading = newWindow.locator('h1').first();

        await expect(heading).toBeVisible();

        console.log(
            "Heading Text:",
            await heading.textContent()
        );

    }
}