export function addToCart(product, store) {
  return {
    type: '@cart/ADD',
    payload: { product, store },
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: { id },
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    payload: { id, amount },
  };
}

export function checkStockRequest(products) {
  return {
    type: '@cart/CHECK_STOCK_REQUEST',
    payload: { products },
  };
}

export function checkStockSucess(products) {
  return {
    type: '@cart/CHECK_STOCK_SUCESS',
    payload: { products },
  };
}
