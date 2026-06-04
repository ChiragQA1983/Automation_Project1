import{test} from '@playwright/test'

import TableContainerPage from '../Pages/TableContainerPage'

test("Validate the WebTable Row 1 and Cell 2 Text", async({page})=> {

const tablecellpage=new TableContainerPage(page);

await tablecellpage.goto();
await tablecellpage.WebtableValidation();

})


