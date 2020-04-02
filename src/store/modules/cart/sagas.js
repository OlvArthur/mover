import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast, Flip } from 'react-toastify';
import api from '../../../services/api';

import { checkStockSucess } from './actions';

toast.configure({
  autoClose: 20000,
});

export function* CheckStockRequest({ payload }) {
  try {
    const response = yield call(api.post, 'checkouts', {
      adressData: payload.adressData,
      stores: payload.stores,
      email: payload.userEmail,
      companyName: payload.companyName,
    });
    yield put(checkStockSucess(response.data));

    toast(
      'Obrigado! A equipe Inobras entrará em contato para finalizar o pedido!',
      {
        autoClose: 10000,
        transition: Flip,
      }
    );
  } catch (error) {
    toast.error('Por favor, cheque suas informações', {
      autoClose: 20000,
      transition: Flip,
    });
  }
}

export default all([
  takeLatest('@cart/CHECK_STOCK_REQUEST', CheckStockRequest),
]);
