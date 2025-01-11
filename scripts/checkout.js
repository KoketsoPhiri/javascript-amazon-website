
import { loadProductFetch } from "../data/products.js";
import { renderOrderSummary } from "./checkout/orderSummary.js";
import{ renderPaymentSummary} from "./checkout/paymentSummary.js";
import "../data/cart-class.js";
//import "../backend/back-end.js";

/*loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
});*/
//renderOrderSummary();
//renderPaymentSummary();

function loadApage(){
  loadProductFetch(()=>{
    renderOrderSummary(()=>{
      renderPaymentSummary();
    });
  });
}



loadApage();



