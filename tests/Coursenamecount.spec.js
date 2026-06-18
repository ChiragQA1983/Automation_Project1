import{test} from '@playwright/test';

import Coursenamecount from '../Pages/Coursenamecount';

test("Print the course name count", async({page})=>{


 const coursenamecount=new Coursenamecount(page);
 
 await coursenamecount.goto();

 await coursenamecount.PrintCourses();

})
