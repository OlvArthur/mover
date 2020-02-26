import produce from 'immer';

const INITIAL_STATE = {
  JProducts: [],
  LPProducts: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const [JIndex, LPIndex] = [
          draft.JProducts.findIndex(p => p.id === action.product.id),
          draft.LPProducts.findIndex(p => p.id === action.product.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts[JIndex].amount += 1;
        } else if (LPIndex >= 0) {
          draft.LPProducts[LPIndex].amount += 1;
        } else if (action.product.Jurunense > action.product.LP) {
          draft.LPProducts.push({
            ...action.product,
            amount: 1,
            image: action.image,
            price: action.product.LP,
          });
        } else {
          draft.JProducts.push({
            ...action.product,
            amount: 1,
            image: action.image,
            price: action.product.Jurunense,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const [JIndex, LPIndex] = [
          draft.JProducts.findIndex(p => p.id === action.id),
          draft.LPProducts.findIndex(p => p.id === action.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts.splice(JIndex, 1);
        } else if (LPIndex >= 0) {
          draft.LPProducts.splice(LPIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT': {
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const [JIndex, LPIndex] = [
          draft.JProducts.findIndex(p => p.id === action.id),
          draft.LPProducts.findIndex(p => p.id === action.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts[JIndex].amount = Number(action.amount);
        } else if (LPIndex >= 0) {
          draft.LPProducts[LPIndex].amount = Number(action.amount);
        }
      });
    }

    default:
      return state;
  }
}
