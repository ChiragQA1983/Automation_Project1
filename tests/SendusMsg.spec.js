import { test, expect } from '@playwright/test';

import SendusMsg from '../Pages/SendusMsg';
import ExcelUtils from '../Pages/ExcelUtils';

test('Validate Send Message Form using Excel Data', async ({ page }) =>
{
    test.setTimeout(120000);

    const sendmsg = new SendusMsg(page);

    // Read Excel Data
    const testData = ExcelUtils.getTestData(
        './tests/testdata/TestData.xlsx',
        'Sheet2'
    );

    console.log("Total Excel Records:", testData.length);

    // Open Application ONLY ONCE
    await sendmsg.goto();

    // Navigate ONLY ONCE
    await sendmsg.ClickOnlineTraining();

    await sendmsg.closeAdvertisementIfPresent();

    await sendmsg.ValidateURL();

    let rowNumber = 1;

    for(const data of testData)
    {
        console.log("======================================");
        console.log(`Executing Excel Row : ${rowNumber}`);
        console.log(`Name   : ${data['Full Name']}`);
        console.log(`Email  : ${data['Email Address']}`);
        console.log(`Course : ${data['Interested Course']}`);
        console.log("======================================");

        page.once('dialog', async dialog =>
        {
            console.log("Alert Message:", dialog.message());

            await expect(dialog.message()).toContain(
                "Thank you for your message!"
            );

            await dialog.accept();
        });

        await sendmsg.FillSendMessageForm(
            data['Full Name'],
            data['Email Address'],
            data['Phone Number'].toString(),
            data['Interested Course'],
            data['Your Message']
        );

        await sendmsg.closeAdvertisementIfPresent();

        await sendmsg.ClickSendMessage();

        console.log(`Row ${rowNumber} Submitted Successfully`);

        rowNumber++;

        // Hold for visual verification
        await page.waitForTimeout(2000);
    }

    console.log("======================================");
    console.log("All Excel Records Executed Successfully");
    console.log("======================================");
});