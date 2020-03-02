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

    api.defaults.headers.Authorization = `Bearer ${user.token}`;

    yield put(SignInSucess(user));

    toast.success(`Seja bem vindo(a), ${user.companyName}!`);

    history.push('/form');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(SignFailure());
  }
}

export function* SignUp({ payload }) {
  try {
    const { company, cnpj, email, password } = payload;

    yield call(api.post, 'users', {
      companyName: company,
      CNPJ: cnpj,
      email,
      password,
    });

    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');

    yield put(SignFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', SignIn),
  takeLatest('@auth/SIGN_UP_REQUEST', SignUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
