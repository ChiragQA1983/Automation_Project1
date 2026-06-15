import{test} from '@playwright/test'

import GetByTestID from '../Pages/GetByTestID'

test("Validate the TestID", async({page})=>{

const getbytestid=new GetByTestID(page);

await getbytestid.goto();
await getbytestid.ValidatebyTestID();


})
