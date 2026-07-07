import{test} from'@playwright/test';


import AddtoCart from '../Pages/AddtoCart';

test("Validation of Addtocart", async({page})=>{

const addtocart=new AddtoCart(page);

await addtocart.goto();

await addtocart.inventorylinksvalidation();

})

