import{test} from'@playwright/test';


import AddtoCart from '../Pages/AddtoCart';

test("Addtocart Validation ", async({page})=>{

const addtocart=new AddtoCart(page);

await addtocart.goto();

await addtocart.inventorylinksvalidation();

})

