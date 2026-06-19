import {test} from '@playwright/test';

import Pythonradio from '../Pages/Pythonradio';

test("Validation of PythonRadio", async({page})=>{

const pythonradio=new Pythonradio(page);

await pythonradio.goto();

await pythonradio.pythonradiobuttonvalidation();


})
