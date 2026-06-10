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
        "//button[@type='submit']"
    );
}

async goto()
{
    await this.page.goto(
        "https://testautomationpractice.blogspot.com/"
    );
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
    await this.submit.scrollIntoViewIfNeeded();

    await this.submit.click();
}


}
