export default function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        {
          ...action.product,
          image: action.image,
          amount: 1,
        },
      ];
    default:
      return state;
  }
}
