import{test} from '@playwright/test';

import Javaenrollment from '../Pages/Javaenrollment';

test("Validate Java Course Content Filter", async({page})=>{

const javaenrollment=new Javaenrollment(page);

await javaenrollment.goto();

await javaenrollment.applyFilters();

await javaenrollment.validateFilteredCourses();

})
