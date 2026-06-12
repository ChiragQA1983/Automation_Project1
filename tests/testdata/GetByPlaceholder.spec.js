import{test} from '@playwright/test';

import GetByPlaceholder from '../../Pages/GetByPlaceholder';

test("Validation of Placeholder", async({page})=>{

 const getbyplaceholder=new GetByPlaceholder(page);
 
 await getbyplaceholder.goto();

 await getbyplaceholder.PlaceholderValidation();

})
