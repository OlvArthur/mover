import { takeLatest, call, all } from 'redux-saga/effects';
import api from '../../../services/api';

export function* checkStock() {
  const response = yield call(api.post, 'checkouts', {
    companyName: 'Inobras',
  });

  console.tron.log(response.data);
}

export default all([takeLatest('@cart/CHECK_STOCK', checkStock)]);
