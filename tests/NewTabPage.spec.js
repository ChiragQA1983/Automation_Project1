import {test} from '@playwright/test';

import NewTabPage from '../Pages/NewTabPage';

test('New tab page validation', async({page})=>{

const newtabpage=new NewTabPage(page);

await newtabpage.goto();
await newtabpage.Newtabvalidation();

})
