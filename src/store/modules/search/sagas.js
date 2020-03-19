import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '../../../services/history';
import api from '../../../services/api';

import { SearchSucess } from './actions';

export function* SearchRequest({ payload }) {
  try {
    const { query } = payload;

    const response = yield call(api.get, 'products', {
      params: {
        query,
        page: 1,
      },
    });

    const products = response.data;
    yield put(SearchSucess(products));

    history.push('/search');
  } catch (e) {
    toast.error('Nenhum produto encontrado');
  }
}

export default all([takeLatest('@search/SEARCH_REQUEST', SearchRequest)]);
