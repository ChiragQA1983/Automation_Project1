import{test} from '@playwright/test';

import PromptalertPage from '../Pages/PromptalertPage';

test('Promptalert Validation', async({page})=>{

const promptalertpage=new PromptalertPage(page);

await promptalertpage.goto();
await promptalertpage.PromptAlertValidation();


})
