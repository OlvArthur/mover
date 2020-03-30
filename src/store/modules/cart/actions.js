export function addToCart(product, store) {
  return {
    type: '@cart/ADD',
    payload: { product, store },
  };
}

export function removeFromCart(productId, storeId) {
  return {
    type: '@cart/REMOVE',
    payload: { productId, storeId },
  };
}

export function updateAmount(storeId, productId, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { storeId, productId, amount },
  };
}

export function checkStockRequest(stores, userEmail, companyName) {
  return {
    type: '@cart/CHECK_STOCK_REQUEST',
    payload: { stores, userEmail, companyName },
  };
}

export function checkStockSucess(products) {
  return {
    type: '@cart/CHECK_STOCK_SUCESS',
    payload: { products },
  };
}
