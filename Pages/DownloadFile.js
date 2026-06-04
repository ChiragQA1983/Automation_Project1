import { expect } from '@playwright/test';

export default class DownloadFile
{
    constructor(page)
    {
        this.page = page;

        // Download Files Section Link
        this.downloadfileslink = page.getByText('Download Files');

        // Input Text Area
        this.textbox = page.locator('#inputText');

        // Generate Button
        this.generatebutton = page.locator('#generateTxt');

        // Download Link
        this.downloadlink = page.locator('#txtDownloadLink');
    }

    async goto()
    {
        await this.page.goto('https://testautomationpractice.blogspot.com/');
    }

    async downloadTextFile()
    {
        // Scroll Footer Link
        await this.downloadfileslink.scrollIntoViewIfNeeded();

        // Click Footer Link
        await this.downloadfileslink.click();

        // Wait
        await this.page.waitForTimeout(2000);

        // Scroll Textbox
        await this.textbox.scrollIntoViewIfNeeded();

        // Click Textbox
        await this.textbox.click();

        // Fill Text
        await this.textbox.fill('Playwright Download Testing');

        // Wait
        await this.page.waitForTimeout(1000);

        // Click Generate Button
        await this.generatebutton.click();

        // Wait for JS generation
        await this.page.waitForTimeout(4000);

        // Validate Download Link Exists
        await expect(this.downloadlink).toContainText('Download Text File');

        // Trigger Download
        await this.page.evaluate(() =>
        {
            const link = document.querySelector('#txtDownloadLink');

            if (link)
            {
                link.click();
            }
        });

        // Final Wait
        await this.page.waitForTimeout(5000);

        console.log('Download Triggered Successfully');
    }
}