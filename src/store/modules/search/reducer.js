import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  loading: false,
};

export default function search(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@search/SEARCH_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@search/SEARCH_SUCESS': {
        draft.products = action.payload.products;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
