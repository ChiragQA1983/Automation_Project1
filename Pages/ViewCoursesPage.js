import { expect } from "@playwright/test";

export default class ViewCoursesPage
{
    constructor(page)
{
        this.page=page;
        this.onlinetrainings=page.getByRole("link",{name:'Online Trainings'});
        this.viewcoursebtn=page.locator('//a[normalize-space()="View Courses"]');
        this.headingtxtvalidate=page.getByRole("heading",{name:'Master In-Demand Skills'});

}

async goto()
{
        await this.page.goto("https://testautomationpractice.blogspot.com/")
}

async ViewCourseValidation()
{
        await this.onlinetrainings.click();
        //await expect(page).toHaveURL("https://www.pavanonlinetrainings.com/");
        await this.viewcoursebtn.click();
        await expect(this.headingtxtvalidate).toContainText("Master In-Demand Skills")

}
}
