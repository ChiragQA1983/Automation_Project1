import{test} from '@playwright/test';

import CourseLevel from '../Pages/CourseLevel';

test("CourseLevel Validation", async({page})=>{

const courselevel=new CourseLevel(page);

await courselevel.goto();

await courselevel.CourseLevelValidation();


})
