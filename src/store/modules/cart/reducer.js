import produce from 'immer';

const INITIAL_STATE = {
  stores: [],

  JProducts: [],
  LPProducts: [],
  BTProducts: [],
};

export default function cart(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const Index = draft.stores.findIndex(
          p => p.id === action.payload.store.id
        );

        if (Index >= 0) {
          const ProductIndex = draft.stores[Index].products.findIndex(
            p => p.id === action.payload.product.id
          );

          if (ProductIndex >= 0) {
            draft.stores[Index].products[ProductIndex].amount += 1;
          } else {
            draft.stores[Index].products.push({
              id: action.payload.product.id,
              description: action.payload.product.description,
              brand: action.payload.product.brand,
              price: action.payload.store.pivot.price,
              amount: 1,
            });
          }
        } else {
          draft.stores.push({
            id: action.payload.store.id,
            name: action.payload.store.name,
            products: [
              {
                id: action.payload.product.id,
                description: action.payload.product.description,
                brand: action.payload.product.brand,
                price: action.payload.store.pivot.price,
                amount: 1,
              },
            ],
          });
        }
        const [JIndex, LPIndex, BTIndex] = [
          draft.JProducts.findIndex(p => p.id === action.payload.product.id),
          draft.LPProducts.findIndex(p => p.id === action.payload.product.id),
          draft.BTProducts.findIndex(p => p.id === action.payload.product.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts[JIndex].amount += 1;
        } else if (LPIndex >= 0) {
          draft.LPProducts[LPIndex].amount += 1;
        } else if (BTIndex >= 0) {
          draft.BTProducts[BTIndex].amount += 1;
        } else if (
          action.payload.product.jurunense > action.payload.product.lp &&
          action.payload.product.beltubos > action.payload.product.lp
        ) {
          draft.LPProducts.push({
            ...action.payload.product,
            amount: 1,
            price: action.payload.product.lp,
          });
        } else if (
          action.payload.product.jurunense > action.payload.product.beltubos
        ) {
          draft.BTProducts.push({
            ...action.payload.product,
            amount: 1,
            price: action.payload.product.beltubos,
          });
        } else {
          draft.JProducts.push({
            ...action.payload.product,
            amount: 1,
            price: action.payload.product.jurunense,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const [JIndex, LPIndex, BTIndex] = [
          draft.JProducts.findIndex(p => p.id === action.payload.id),
          draft.LPProducts.findIndex(p => p.id === action.payload.id),
          draft.BTProducts.findIndex(p => p.id === action.payload.id),
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
      if (action.payload.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const [JIndex, LPIndex, BTIndex] = [
          draft.JProducts.findIndex(p => p.id === action.payload.id),
          draft.LPProducts.findIndex(p => p.id === action.payload.id),
          draft.BTProducts.findIndex(p => p.id === action.payload.id),
        ];

        if (JIndex >= 0) {
          draft.JProducts[JIndex].amount = Number(action.payload.amount);
        } else if (LPIndex >= 0) {
          draft.LPProducts[LPIndex].amount = Number(action.payload.amount);
        } else if (BTIndex >= 0) {
          draft.BTProducts[BTIndex].amount = Number(action.payload.amount);
        }
      });

    case '@cart/CHECK_STOCK_SUCESS':
      console.tron.log(action.payload.products);
      return state;

    default:
      return state;
  }
}
