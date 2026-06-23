import{test} from '@playwright/test';

import NoCourseMatch from '../Pages/NoCourseMatch';

test("Validation of NoCourseMatch", async({page})=>{

const nocoursematch=new NoCourseMatch(page);

await nocoursematch.goto();

await nocoursematch.Nocoursevalidation();

});
