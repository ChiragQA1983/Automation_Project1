import { expect } from "@playwright/test";

export default class SendusMsg
{
constructor(page)
{
this.page = page;


    // Homepage Link
    this.OnlineTrainingLink = page.locator(
        "//a[normalize-space()='Online Trainings']"
    );

    // Form Fields
    this.EnterName = page.locator("#name");

    this.EnterEmail = page.locator("#email");

    this.EnterPhone = page.locator("#phone");

    this.SelectCourse = page.locator("#course");

    this.YourMessage = page.locator("#message");

    this.submit = page.locator(
        "//button[@type='submit']");


        // Advertisement Popup
    this.adPopup = page.locator("#adModal");

    this.adCloseBtn = page.locator("#adCloseBtn");


    
}

async goto()
{
    await this.page.goto(
        "https://testautomationpractice.blogspot.com/"
    );
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


async ClickOnlineTraining()
{
    await this.OnlineTrainingLink.click();

    // Wait for redirected page
    await this.page.waitForURL(/.*pavanonlinetrainings/);

    // Wait for form field
    await this.EnterName.waitFor({
        state: "visible",
        timeout: 20000
    });
}

async ValidateURL()
{
    await expect(this.page).toHaveURL(
        /.*pavanonlinetrainings/
    );
}

async FillSendMessageForm(name,email,phone,course,message)
{
    // Scroll to Form
    await this.EnterName.scrollIntoViewIfNeeded();

    // Fill Form
    await this.EnterName.fill(name);

    await this.EnterEmail.fill(email);

    await this.EnterPhone.fill(phone);

    await this.SelectCourse.selectOption({ label: course });

    await this.YourMessage.fill(message);
}

async ClickSendMessage()
{
    // Scroll to button
    await this.submit.scrollIntoViewIfNeeded();

    // Close popup if it appears
    await this.closeAdvertisementIfPresent();

    // Click Send Message
    await this.submit.click();
}


}
