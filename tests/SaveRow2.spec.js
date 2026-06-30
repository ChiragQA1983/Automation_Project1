import {test} from '@playwright/test';

import SaveRow2 from '../Pages/SaveRow2';

test("Validate SaveRow2", async({page})=>{

const saverow2=new SaveRow2(page);

await saverow2.goto();

await saverow2.validatenewaddedrow2();

})