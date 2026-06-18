import{test} from '@playwright/test';

import FooterBlogLink from '../Pages/FooterBlogLink';

test("Validation of FooterBlogLink", async({page})=>{

const footerbloglink=new FooterBlogLink(page);

await footerbloglink.goto();

await footerbloglink.Bloglinknewtabvalidation();

})
