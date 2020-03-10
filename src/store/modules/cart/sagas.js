import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';

import { checkStockSucess } from './actions';

export function* CheckStockRequest({ payload }) {
  const response = yield call(api.post, 'checkouts', {
    products: payload.products,
  });

  yield put(checkStockSucess(response.data));
}

export default all([
  takeLatest('@cart/CHECK_STOCK_REQUEST', CheckStockRequest),
]);
