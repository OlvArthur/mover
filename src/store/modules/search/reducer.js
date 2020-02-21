import produce from 'immer';

const INITIAL_STATE = {
  products: [],
  loading: false,
  categories: [
    {
      name: 'Materias de construção',
      objetos: ['Cimento', 'Aço', 'Cal'],
    },
    {
      name: 'Telhas e Forros',
      objetos: ['Telhas', 'Pregos', 'Mantas'],
    },
    {
      name: 'Ferramentas',
      objetos: ['Ferramentas manuais', 'Aço', 'Cal'],
    },
    {
      name: 'Materias de construção',
      objetos: ['Cimento', 'Aço', 'Cal'],
    },
    {
      name: 'Materias de construção',
      objetos: ['Cimento', 'Aço', 'Cal'],
    },
  ],
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
