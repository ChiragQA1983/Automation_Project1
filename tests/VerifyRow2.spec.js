import{test} from '@playwright/test';

import VerifyRow2 from '../Pages/VerifyRow2';

test("Validate the new row2 added", async({page})=>{

const verifyrow2=new VerifyRow2(page);

await verifyrow2.goto();

await verifyrow2.validatenewaddedrow2();

})
