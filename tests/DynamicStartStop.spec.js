import{test} from '@playwright/test';

import DynamicStartStopPage from '../Pages/DynamicStartStopPage';

test('DynamicStartStop Button', async({page})=>
{
   
    const dynamicstartstoppage=new DynamicStartStopPage(page)

    await dynamicstartstoppage.goto();
    await dynamicstartstoppage.StartButtonClickValidation();

 })
