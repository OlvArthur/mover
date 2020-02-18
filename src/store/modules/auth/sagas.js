import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import api from '../../../services/api';
import { SignInSucess, SignFailure } from './actions';

export function* SignIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const user = response.data;

    yield put(SignInSucess(user));
    toast.success('Bem vindo');
    history.push('/form');
  } catch (err) {
    console.tron.log(err);
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(SignFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
