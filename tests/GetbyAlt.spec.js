import {test} from '@playwright/test';

import GetbyAltText from '../Pages/GetbyAltText';


test("Validate the GetByAltTextLogo", async({page}) =>{

const getbyalttext=new GetbyAltText(page);
 
await getbyalttext.goto();
await getbyalttext.validatelogoandtext();

}

)
