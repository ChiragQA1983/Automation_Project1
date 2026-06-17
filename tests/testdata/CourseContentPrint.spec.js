import{test} from '@playwright/test';

import CourseContentPrint from '../../Pages/CourseContentPrint';


test("Validate the CourseContent", async({page})=>{

    const coursecontentprint=new CourseContentPrint(page);

    await coursecontentprint.goto();

    await coursecontentprint.courselevelvalidation();


})
