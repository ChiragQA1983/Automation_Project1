import{test} from '@playwright/test';

import Resetbutton from '../Pages/Resetbutton';

test("Validation of reset button function", async({page})=>{

 const resetbutton=new Resetbutton(page);

 await resetbutton.goto();

 await resetbutton.RestButtonValidation();

})