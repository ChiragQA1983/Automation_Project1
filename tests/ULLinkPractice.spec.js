import {test} from '@playwright/test';

import ULLinkPractice from '../Pages/ULLinkPractice';

test("Validation of ULLinks", async({page})=>{

const ullinks=new ULLinkPractice(page);

await ullinks.goto();

await ullinks.courseullinksvalidation();
await ullinks.newtaburlvalidation();

})
