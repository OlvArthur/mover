import produce from 'immer';

const INITIAL_STATE = {
  JProducts: [],
  LPProducts: [],
  BTProducts: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const [JIndex, LPIndex, BTIndex] = [
          draft.JProducts.findIndex(p => p.id === action.product.id),
          draft.LPProducts.findIndex(p => p.id === action.product.id),
          draft.BTProducts.findIndex(p => p.id === action.product.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts[JIndex].amount += 1;
        } else if (LPIndex >= 0) {
          draft.LPProducts[LPIndex].amount += 1;
        } else if (BTIndex >= 0) {
          draft.BTProducts[BTIndex].amount += 1;
        } else if (
          action.product.jurunense > action.product.lp &&
          action.product.beltubos > action.product.lp
        ) {
          draft.LPProducts.push({
            ...action.product,
            amount: 1,
            price: action.product.lp,
          });
        } else if (action.product.jurunense > action.product.beltubos) {
          draft.BTProducts.push({
            ...action.product,
            amount: 1,
            price: action.product.beltubos,
          });
        } else {
          draft.JProducts.push({
            ...action.product,
            amount: 1,
            price: action.product.jurunense,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const [JIndex, LPIndex, BTIndex] = [
          draft.JProducts.findIndex(p => p.id === action.id),
          draft.LPProducts.findIndex(p => p.id === action.id),
          draft.BTProducts.findIndex(p => p.id === action.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts.splice(JIndex, 1);
        } else if (LPIndex >= 0) {
          draft.LPProducts.splice(LPIndex, 1);
        } else if (BTIndex >= 0) {
          draft.BTProducts.splice(BTIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT':
      if (action.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const [JIndex, LPIndex, BTIndex] = [
          draft.JProducts.findIndex(p => p.id === action.id),
          draft.LPProducts.findIndex(p => p.id === action.id),
          draft.BTProducts.findIndex(p => p.id === action.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts[JIndex].amount = Number(action.amount);
        } else if (LPIndex >= 0) {
          draft.LPProducts[LPIndex].amount = Number(action.amount);
        } else if (BTIndex >= 0) {
          draft.BTProducts[BTIndex].amount = Number(action.amount);
        }
      });

    case '@cart/CHECK_STOCK_SUCESS':
      console.tron.log(action.payload.products);
      return state;

    default:
      return state;
  }
}
