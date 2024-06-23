import{ renderOrderSummary } from "../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../data/cart.js";
import { renderPaymentSummary } from "../scripts/checkout/paymentSummary.js";

describe('renderodersummary',()=>{
  it('displays cart',()=>{

    document.querySelector('.js-order-summary-test-container').innerHTML =
     `<div class="js-order-summary"></div>`;

    const product1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const product2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId:product1 ,
        quantity:1,
        deliveryOptionId: "1"
      },
      {
        productId:product2,
        quantity:2,
        deliveryOptionId: "2"
      }]);
    });

    loadFromStorage();
    renderOrderSummary();

    expect(document.querySelectorAll('.js-test-item-container').length).toEqual(2);
    expect(document.querySelector(`.js-product-quantity-${product1}`).innerText).toContain('Quantity: 1');
    expect(document.querySelector(`.js-product-quantity-${product2}`).innerText).toContain('Quantity: 2');

  });

  it('removes a product from cart',()=>{
        document.querySelector('.js-order-summary-test-container').innerHTML =
     `<div class="js-order-summary"></div>
     <div class="js-payment-summary"></div>
     
     `;

    const product1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const product2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";
    spyOn(localStorage,'getItem').and.callFake(()=>{
      return JSON.stringify([{
        productId:product1 ,
        quantity:1,
        deliveryOptionId: "1"
      },
      {
        productId:product2,
        quantity:2,
        deliveryOptionId: "2"
      }]);
    });

    loadFromStorage();
    renderOrderSummary();
    renderPaymentSummary();

    document.querySelector(`.js-test-delete-link-${product1}`).click();

    expect(document.querySelectorAll('.js-test-item-container').length).toEqual(1);
    expect(document.querySelector(`.js-product-quantity-${product1}`)).toEqual(null);
    expect(document.querySelector(`.js-product-quantity-${product2}`)).not.toEqual(null);

  });
});

