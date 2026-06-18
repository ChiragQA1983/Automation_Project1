import{test} from '@playwright/test';

import Beginnercoursevisibility from '../../Pages/Beginnercoursevisibility';


test("Validation of begginercourse", async({page})=>{

const beginner=new Beginnercoursevisibility(page);

await beginner.goto();

await beginner.beginnercoursevalidation();

})
