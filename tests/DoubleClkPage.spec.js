import{test} from '@playwright/test';

import DoubleClickPage from '../Pages/DoubleClickPage';

test("Double Click Validation", async({page})=>{

const doubleclickpage=new DoubleClickPage(page);

await doubleclickpage.goto();
await doubleclickpage.DoubleClickValidation();

})

