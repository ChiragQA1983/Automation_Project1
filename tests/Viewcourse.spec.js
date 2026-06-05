import{test} from '@playwright/test';

import ViewCoursesPage from '../Pages/ViewCoursesPage';

test("Validate Viewcourse", async({page})=>{

const viewcoursepage=new ViewCoursesPage(page);

await viewcoursepage.goto();

await viewcoursepage.ViewCourseValidation();

})
