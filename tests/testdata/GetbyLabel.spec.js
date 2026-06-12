import{test} from '@playwright/test';

import GetbyLabel from '../../Pages/GetbyLabel';


test("Validation of Label", async({page})=>{

const getbylabel=new GetbyLabel(page);

await getbylabel.goto();

await getbylabel.getbylabelvalidation();


})