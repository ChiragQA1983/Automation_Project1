import{test} from '@playwright/test';

import Onlinepage from '../Pages/Onlinepage';

test("Validate the online courses", async({page})=>{

const onlinepage=new Onlinepage(page);

await onlinepage.goto();

await onlinepage.Onelinetrainingvalidation();

})
