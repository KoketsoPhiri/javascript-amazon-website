
import { loadProducts } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import{ renderPaymentSummary} from "./checkout/paymentSummary.js";
import "../data/cart-class.js";
/*import "../backend/back-end.js";*/

/*loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});*/
/*renderOrderSummary();
renderPaymentSummary();*/

async function loadApage(){
  try{
    await new Promise((resolve)=>{
      loadProducts(()=>{
        resolve();
      });
     }).then(()=>{
      renderOrderSummary();
      renderPaymentSummary();
     }); 
  } catch{
    console.log('unknown error.please reload the page');
  }
 

}
loadApage();



