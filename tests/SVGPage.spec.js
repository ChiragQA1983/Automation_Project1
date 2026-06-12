import{test} from'@playwright/test';

import SvgPage from '../Pages/SVGPage';

test("Validate the SVGPAge", async({page})=>{

const svgpage=new SvgPage(page);

await svgpage.goto();
await svgpage.validateSvgElements();

})
