import{test} from '@playwright/test';

import CourseContentPrint from '../Pages/CourseContentPrint';


test("CourseContent Validate ", async({page})=>{

    const coursecontentprint=new CourseContentPrint(page);

    await coursecontentprint.goto();

    await coursecontentprint.courselevelvalidation();


})
