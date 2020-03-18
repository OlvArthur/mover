import produce from 'immer';

const INITIAL_STATE = {
  stores: [],
  productsAmount: 0,
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
              measure: action.payload.product.measure,
            });
            draft.productsAmount += 1;
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
                measure: action.payload.product.measure,
              },
            ],
          });
          draft.productsAmount += 1;
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const storeIndex = draft.stores.findIndex(
          p => p.id === action.payload.storeId
        );
        const productIndex = draft.stores[storeIndex].products.findIndex(
          p => p.id === action.payload.productId
        );

        draft.stores[storeIndex].products.splice(productIndex, 1);
        draft.productsAmount -= 1;

        const storeProducts = draft.stores[storeIndex].products.length;

        if (storeProducts === 0) {
          draft.stores.splice(storeIndex, 1);
        }
      });

    case '@cart/UPDATE_AMOUNT':
      if (action.payload.amount <= 0) {
        return state;
      }

      return produce(state, draft => {
        const storeIndex = draft.stores.findIndex(
          p => p.id === action.payload.storeId
        );
        const productIndex = draft.stores[storeIndex].products.findIndex(
          p => p.id === action.payload.productId
        );

        if (productIndex >= 0) {
          draft.stores[storeIndex].products[productIndex].amount = Number(
            action.payload.amount
          );
        }
      });

    case '@cart/CHECK_STOCK_SUCESS':
      console.tron.log(action.payload.products);
      return state;

    default:
      return state;
  }
}
