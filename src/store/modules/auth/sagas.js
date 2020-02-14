import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import { login } from '../../../services/auth';
import { SignInSucess } from './actions';

export function* SignIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token } = response.data;

  yield call(login, token);

  const userData = yield call(api.get, 'sessions', {
    params: {
      email,
    },
  });

  const user = userData.data[0];

  yield put(SignInSucess(token, user));
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
