import{test} from '@playwright/test';

import Getbyrole from '../Pages/Getbyrole';

test("Validate the GetByRole", async({page})=>{

const getbyrole=new Getbyrole(page);

await getbyrole.goto();
await getbyrole.getbyrolebuttonvalidation();
})
