import{test} from '@playwright/test';

import NextBatchesPage from '../Pages/NextBatchesPage';

test("Validate nextbatches", async({page})=>{

    const nextbatchpage=new NextBatchesPage(page);
    await nextbatchpage.goto();
    await nextbatchpage.nextbatchesvalidation();
})
