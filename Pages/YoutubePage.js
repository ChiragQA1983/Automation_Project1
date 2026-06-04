import{expect} from '@playwright/test';

export default class YoutubePage
{

    constructor(page)
    {
      this.page=page;
      this.youtubelink=page.getByRole("link",{name:'Youtube'});

    }


  async goto()
  {
     await this.page.goto("https://testautomationpractice.blogspot.com/");

  }
  async YoutubelinkNavigationcheck()
  {
    await this.youtubelink.click();
    await expect(this.page).toHaveURL("https://www.youtube.com/@sdetpavan/videos");
    await expect(this.page).toHaveTitle(/SDET- QA - YouTube/)
  }


}
