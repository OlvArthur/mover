import { takeLatest, call, put, all } from 'redux-saga/effects';

import history from '../../../services/history';
import api from '../../../services/api';
import { login } from '../../../services/auth';
import { SignInSucess } from './actions';

export function* SignIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const user = response.data;

  login(user.token);

  yield put(SignInSucess(user));
  history.push('/form');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
