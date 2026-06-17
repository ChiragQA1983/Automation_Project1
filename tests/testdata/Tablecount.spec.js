import{test} from '@playwright/test';


import Tablecount from '../../Pages/Tablecount';


test("Print table id number fifth", async({page})=>{

 const tablecount=new Tablecount(page);

 await tablecount.goto();

 await tablecount.tableidvalidation();

})
