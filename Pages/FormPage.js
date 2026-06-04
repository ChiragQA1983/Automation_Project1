import { expect } from '@playwright/test';

export default class FormPage
{
    constructor(page)
    {
        this.page = page;

        // Text Fields
        this.name = page.locator("//input[@id='name']");
        this.email = page.locator("//input[@id='email']");
        this.phone = page.locator("//input[@id='phone']");
        this.address = page.locator("//textarea[@id='textarea']");

        // Gender
        this.male = page.locator("//input[@id='male']");
        this.female = page.locator("//input[@id='female']");

        // Days
        this.monday = page.locator("//input[@id='monday']");

        // Country Dropdown
        this.country = page.locator("//select[@id='country']");

        // Date Pickers
        this.datepicker1 = page.locator("//input[@id='datepicker']");
        this.datepicker2 = page.locator("//input[@id='txtDate']");

        // Date Range
        this.startdate = page.locator("//input[@id='start-date']");
        this.enddate = page.locator("//input[@id='end-date']");

        // Submit Button
        this.submitbtn = page.locator("//button[@class='submit-btn']");

        // Success Message
        this.successmsg = page.locator("//div[@id='result']");
    }

    // Launch URL
    async goto()
    {
        await this.page.goto(
            "https://testautomationpractice.blogspot.com/"
        );
    }

    // Convert Excel Serial Number to JS Date
    excelDateToJSDate(serial)
    {
        return new Date(
            (serial - 25569) * 86400 * 1000
        );
    }

    // Format MM/DD/YYYY
    formatMMDDYYYY(date)
    {
        return (
            `${String(date.getMonth() + 1).padStart(2, '0')}/` +
            `${String(date.getDate()).padStart(2, '0')}/` +
            `${date.getFullYear()}`
        );
    }

    // Format DD/MM/YYYY
    formatDDMMYYYY(date)
    {
        return (
            `${String(date.getDate()).padStart(2, '0')}/` +
            `${String(date.getMonth() + 1).padStart(2, '0')}/` +
            `${date.getFullYear()}`
        );
    }

    // Format YYYY-MM-DD
    formatYYYYMMDD(date)
    {
        return (
            `${date.getFullYear()}-` +
            `${String(date.getMonth() + 1).padStart(2, '0')}-` +
            `${String(date.getDate()).padStart(2, '0')}`
        );
    }

    async fillForm(data)
    {
        // Fill Name
        await this.name.fill(data.Name);

        // Fill Email
        await this.email.fill(data.Email);

        // Fill Phone
        await this.phone.fill(
            data.Phone.toString()
        );

        // Fill Address
        await this.address.fill(data.Address);

        // Select Gender
        if(data.Gender?.trim() === "Male")
        {
            await this.male.check();
        }
        else
        {
            await this.female.check();
        }

        // Select Monday Checkbox
        if(data["Days (Weekdays)"]?.trim() === "Monday")
        {
            await this.monday.check();
        }

        // Select Country
        await this.country.selectOption({
            label: data.Country
        });

        // Select Color
        await this.page
            .locator(
                `//option[@value='${data.Colors.toLowerCase()}']`
            )
            .click();

        // Select Sorted List Value
        await this.page
            .locator(
                `//option[@value='${data["Sorted List"].toLowerCase()}']`
            )
            .click();

        // =========================
        // Date Picker 1
        // =========================

        const date1 = this.excelDateToJSDate(
            data["Date Picker 1 (mm/dd/yyyy): "]
        );

        const formattedDate1 =
            this.formatMMDDYYYY(date1);

        await this.datepicker1.fill(
            formattedDate1
        );

        // =========================
        // Date Picker 2
        // =========================

        const date2 = this.excelDateToJSDate(
            data["Date Picker 2 (dd/mm/yyyy) :"]
        );

        const formattedDate2 =
            this.formatDDMMYYYY(date2);

        // Remove readonly attribute
        await this.page.evaluate(() =>
        {
            document
                .getElementById('txtDate')
                .removeAttribute('readonly');
        });

        await this.datepicker2.fill(
            formattedDate2
        );

        // =========================
        // Date Range Picker
        // =========================

        const startDate = this.excelDateToJSDate(
            data["Date Picker 3: (Select a Date Range 1)"]
        );

        const endDate = this.excelDateToJSDate(
            data["Date Picker 3: (Select a Date Range 2)"]
        );

        const formattedStart =
            this.formatYYYYMMDD(startDate);

        const formattedEnd =
            this.formatYYYYMMDD(endDate);

        await this.startdate.fill(
            formattedStart
        );

        await this.enddate.fill(
            formattedEnd
        );

        // =========================
        // Calculate Difference
        // =========================

        const diffTime = endDate - startDate;

        const days =
            diffTime / (1000 * 60 * 60 * 24);

        console.log(
            `Start Date: ${formattedStart}`
        );

        console.log(
            `End Date: ${formattedEnd}`
        );

        console.log(
            `Difference in Days: ${days}`
        );

        // Click Submit Button
        await this.submitbtn.click();

        // Verify Message Visible
        await expect(this.successmsg)
            .toBeVisible();

        // Positive Scenario
        if(days > 0)
        {
            await expect(this.successmsg)
                .toContainText(`${days} days`);

            console.log(
                `Success Message: ${
                    await this.successmsg.textContent()
                }`
            );
        }

        // Negative Scenario
        else
        {
            await expect(this.successmsg)
                .toContainText(
                    "End date must be after start date."
                );

            console.log(
                `Error Message: ${
                    await this.successmsg.textContent()
                }`
            );
        }
    }
}