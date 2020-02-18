import { takeLatest, call, put, all } from 'redux-saga/effects';

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
    history.push('/form');
  } catch (err) {
    yield put(SignFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', SignIn)]);
