import { expect } from "@playwright/test";

export default class Javaenrollment
{
    constructor(page)
    {
        this.page=page;
        this.Javaradiobtn=page.locator("//label[normalize-space()='Java']");
        this.Beginnercheckbox=page.locator("//input[@value='Beginner']");
        this.Intermediatecheckbox=page.locator("//input[@value='Intermediate']");
        this.Advancedcheckbox=page.locator("//label[normalize-space()='Advanced']");

        
    }
}
