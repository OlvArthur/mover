import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { updateProfileSucess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { companyName, email, ...rest } = payload.data;

    const profile = {
      companyName,
      email,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);
    console.tron.log(response.data);

    toast.success('Perfil Atualizado com sucesso');

    yield put(updateProfileSucess(response.data));
  } catch (error) {
    yield put(updateProfileFailure());
    toast.error('Erro ao atualizar perfil, confira seus dados');
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
