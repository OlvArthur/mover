export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          product: action.product,
          image: action.image,
        },
      ];
    default:
      return state;
  }
}
