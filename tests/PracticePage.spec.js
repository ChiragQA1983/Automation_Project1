import{test} from '@playwright/test';

import PracticePage from '../Pages/PracticePage';

test("Blank login alerts validation", async({page})=>{

const practicepage=new PracticePage(page)

await practicepage.goto();

await practicepage.alertmessagevalidation();


})
