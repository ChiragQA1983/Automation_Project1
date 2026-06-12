import{test} from '@playwright/test';

import Getbytitle from '../Pages/Getbytitle';

test("Validate the titles", async({page})=>{

const getbytitle=new Getbytitle(page);
{
   await getbytitle.goto();
   await getbytitle.validatetitles();
}

})
