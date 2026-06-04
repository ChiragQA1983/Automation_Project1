import{test} from '@playwright/test';

import YoutubePage from '../Pages/YoutubePage';

test("Youtube link navigation check", async({page})=>{

    const youtube=new YoutubePage(page);
    await youtube.goto();
    await youtube.YoutubelinkNavigationcheck();

})
