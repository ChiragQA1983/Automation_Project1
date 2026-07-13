import{test} from '@playwright/test'

import Dropdown from '../Pages/Dropdown'

test("Validate the dropdown option selection", async({page})=>{


const dropdownlist=new Dropdown(page);

await dropdownlist.goto();

await dropdownlist.dropdownvalidation();


})
