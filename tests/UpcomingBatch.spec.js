import{test} from '@playwright/test';

import UpcomingBatch from '../Pages/UpcomingBatch';

test("Validate the Upcoming Batch Button Contain the Count", async({page})=>{


const upcomingbatch=new UpcomingBatch(page);

await upcomingbatch.goto();
await upcomingbatch.validateupcomingbatch();

})
