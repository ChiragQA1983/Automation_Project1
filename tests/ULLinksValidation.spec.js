import{test} from '@playwright/test';

import ULLinksValidation from '../Pages/ULLinksValidation';

test("Validation of Anchor Tag Count and Print Texts", async({page})=>{

const ullinksvalidation=new ULLinksValidation(page);

await ullinksvalidation.goto();
await ullinksvalidation.AnchorLinksValidation();
})
