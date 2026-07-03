import{test} from '@playwright/test';

import Anchortag from '../Pages/Anchortag';

test("Validation and Prints Anchortags", async({page})=>{

    const anchortag=new Anchortag(page);

    await anchortag.goto();

    await anchortag.Anchortagvalidation();

})
