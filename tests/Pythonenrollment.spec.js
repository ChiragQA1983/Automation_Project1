import {test} from '@playwright/test';

import PythonEnrollment from '../Pages/Pythonenrollment';

test("Validate the Enrollment > 1000", async({page})=>{

    const pythonenrollment=new PythonEnrollment(page);

    await pythonenrollment.goto();

    await pythonenrollment.applyFilters();
    await pythonenrollment.validateFilteredCourses();

})
