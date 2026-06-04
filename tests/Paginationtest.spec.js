import{test} from'@playwright/test';

import Pagination from '../Pages/Paginatination';

test("Validation of PaginationTest", async({page})=>{
 
const pagination=new Pagination(page);

await pagination.goto();

await pagination.Paginationvalidation();

await pagination.checkboxcheck();


})
