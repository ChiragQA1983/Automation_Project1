import{test} from '@playwright/test';

import PointMePage from '../Pages/PointMePage';

test('Validation of Point Me Button', async({page})=>{

const pointmepage=new PointMePage(page);

await pointmepage.goto();

await pointmepage.PointMeButtonValidation();

})
