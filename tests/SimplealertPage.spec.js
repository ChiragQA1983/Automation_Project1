import{test} from'@playwright/test';

import SimplealertPage from '../Pages/SimplealertPage';

test('Validate Simple Alert', async({page})=>{

const simplealertpage=new SimplealertPage(page);
await simplealertpage.goto();
await simplealertpage.Alertbuttonclick();

})
