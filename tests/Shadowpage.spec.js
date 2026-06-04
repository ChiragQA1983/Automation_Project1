import{test} from '@playwright/test';

import ShadowPage from '../Pages/ShadowPage';

test("Validation of Laptoptext", async({page})=>{

const shadowdom=new ShadowPage(page);    

await shadowdom.goto();
await shadowdom.laptopsandmobilestextvalidation();

})
