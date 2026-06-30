import{test} from '@playwright/test';

import Sortbycoursename from '../Pages/Sortbycoursename';

test("Validation of Sorting Orders of Course", async({page})=>{

const sortbycoursename=new Sortbycoursename(page);

await sortbycoursename.goto();

await sortbycoursename.selectCourseSorting();

await sortbycoursename.ValidateCourseSorting();

})
