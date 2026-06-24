import {test} from '@playwright/test';

import Printcoursename from '../Pages/Printcoursename';

test("Validation of Printcoursename", async({page})=>{

const printcoursename=new Printcoursename(page);

await printcoursename.goto();

await printcoursename.PrintCourseNameValidation();

})
