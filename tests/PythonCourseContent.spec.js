import {test} from '@playwright/test';

import PythonCouseContent from '../Pages/PythonCourseContent';

test("Validate the Python course Content", async({page})=>{

const pythoncoursecontent=new PythonCouseContent(page);

await pythoncoursecontent.goto();

await pythoncoursecontent.PythonCouseContentValidation();


})
