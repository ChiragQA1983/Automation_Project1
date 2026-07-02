import { expect } from "@playwright/test";

export default class SendusMsg
{
    constructor(page)
    {
        this.page = page;

        // Home Page
        this.OnlineTrainingLink =
            page.locator("//a[normalize-space()='Online Trainings']");

        // Form Fields
        this.EnterName = page.locator("#name");
        this.EnterEmail = page.locator("#email");
        this.EnterPhone = page.locator("#phone");
        this.SelectCourse = page.locator("#course");
        this.YourMessage = page.locator("#message");
        this.submit = page.locator("//button[@type='submit']");

        // Advertisement
        this.adPopup = page.locator("#adModal");
        this.adCloseBtn = page.locator("#adCloseBtn");
    }

    async goto()
    {
        await this.page.goto(
            "https://testautomationpractice.blogspot.com/",
            {
                waitUntil: "domcontentloaded",
                timeout: 60000
            }
        );

        console.log("Homepage Loaded");
    }

    async ClickOnlineTraining()
    {
        await Promise.all([
            this.page.waitForURL(/.*pavanonlinetrainings/),
            this.OnlineTrainingLink.click()
        ]);

        await this.EnterName.waitFor({
            state: "visible"
        });

        console.log(
            "Successfully navigated to Online Trainings Page"
        );
    }

    async ValidateURL()
    {
        await expect(this.page)
            .toHaveURL(/.*pavanonlinetrainings/);

        console.log("URL Validation Passed");
    }

    async closeAdvertisementIfPresent()
    {
        try
        {
            if(await this.adPopup.isVisible({ timeout: 3000 }))
            {
                console.log("Advertisement Popup Found");

                await this.adCloseBtn.click();

                await expect(this.adPopup).toBeHidden();

                console.log("Advertisement Popup Closed");
            }
        }
        catch
        {
            console.log("Advertisement Popup Not Displayed");
        }
    }

    async FillSendMessageForm(
        name,
        email,
        phone,
        course,
        message
    )
    {
        await this.EnterName.fill("");

        await this.EnterEmail.fill("");

        await this.EnterPhone.fill("");

        await this.YourMessage.fill("");

        await this.EnterName.fill(name);

        await this.EnterEmail.fill(email);

        await this.EnterPhone.fill(phone);

        await this.SelectCourse.selectOption({
            label: course
        });

        await this.YourMessage.fill(message);

        console.log("Form Filled Successfully");
    }

    async ClickSendMessage()
    {
        await this.submit.scrollIntoViewIfNeeded();

        await this.closeAdvertisementIfPresent();

        await expect(this.submit).toBeVisible();

        await this.submit.click();

        console.log("Send Message Button Clicked");
    }
}