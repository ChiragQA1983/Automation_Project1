import { test, expect } from '@playwright/test';

import SendusMsg from '../Pages/SendusMsg';

import ExcelUtils from '../Pages/ExcelUtils';

test('Validate Send Message Form using Excel Data', async ({ page }) =>
{
const sendmsg = new SendusMsg(page);


// Read Excel Data
const testData = ExcelUtils.getTestData(
    './tests/testdata/TestData.xlsx',
    'Sheet2'
);

for(const data of testData)
{
    // Open Website
    await sendmsg.goto();

    // Click Online Trainings
    await sendmsg.ClickOnlineTraining();

    await sendmsg.closeAdvertisementIfPresent();
    // Validate Redirected URL
    await sendmsg.ValidateURL();

    // Handle Alert Popup
    page.once('dialog', async dialog =>
    {
        console.log(dialog.message());

        await expect(dialog.message()).toContain(
            'Thank you for your message!'
        );

        await dialog.accept();
    });

    // Fill Form
    await sendmsg.FillSendMessageForm(

        data['Full Name'],

        data['Email Address'],

        data['Phone Number'].toString(),

        data['Interested Course'],

        data['Your Message']
    );

    // Submit Form
    await sendmsg.ClickSendMessage();
}


});
