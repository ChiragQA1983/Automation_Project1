import{test} from '@playwright/test';

import DynamicStartStopPage from '../Pages/DynamicStartStopPage';

test('Validation of Dynamic Button', async({page})=>
{
   
    const dynamicstartstoppage=new DynamicStartStopPage(page)

    await dynamicstartstoppage.goto();
    await dynamicstartstoppage.StartButtonClickValidation();

 })
