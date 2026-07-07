import{test} from '@playwright/test';

import SauceLogin from '../Pages/SauceLogin';

test("Validation of SauceLogin", async({page})=>{

 const saucelogin=new SauceLogin(page);
 
 await saucelogin.goto();

 await saucelogin.inventorylinksvalidation();

})
