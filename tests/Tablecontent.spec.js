import {test} from '@playwright/test';

import TableContentVerify from '../Pages/TableContentVerify';


test("Validate TableContent", async({page})=>{

const tablecontentverify=new TableContentVerify(page);

await tablecontentverify.goto();

await tablecontentverify.TableContentValidation();

})
