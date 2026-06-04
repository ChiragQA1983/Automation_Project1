import{test} from '@playwright/test'

import DragAndDropPage from '../Pages/DragAndDropPage'

test("Validation of Drag and Drop", async({page})=>{

const draganddrop=new DragAndDropPage(page)

await draganddrop.goto();
await draganddrop.DragandDropValidation();


})
