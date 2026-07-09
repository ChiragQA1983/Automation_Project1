import {test} from '@playwright/test';

import JavaCourseContent from '../Pages/JavaCourseContent';


test("Validation of JavaCourseContent", async({page})=>{

const javacoursecontent=new JavaCourseContent(page);

await javacoursecontent.goto();

await javacoursecontent.coursesvalidation();

})
