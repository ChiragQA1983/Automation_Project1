import {test} from '@playwright/test';

import ULlinkscount from '../Pages/ULlinkscount';


test("Validate the ULlinkscounts", async({page})=>{

const ullinkscount=new ULlinkscount(page);

await ullinkscount.goto();

await ullinkscount.validatetheullinks();

})
