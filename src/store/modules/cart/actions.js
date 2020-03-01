export function addToCart(product, image) {
  return {
    type: '@cart/ADD',
    product,
    image,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
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
