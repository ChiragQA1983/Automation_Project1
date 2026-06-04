import {test} from '@playwright/test'

import WebTablePage from '../Pages/WebtablePage'

test("Validation of Webtable", async({page})=>{

const webtable=new WebTablePage(page)

await webtable.goto();
await webtable.Webtabledatavalidation();

})