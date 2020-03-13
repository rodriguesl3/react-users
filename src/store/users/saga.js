import { call, put, takeLatest } from 'redux-saga/effects';

import { api } from '../../services/api';
import { requestUsersSuccess, requestUserFailure } from './actions';

export function* userRequestGenerator(action) {
  try {
    const response = yield call(api.get, '/users');
    yield put(requestUsersSuccess(response.data));
  } catch (err) {
    yield put(requestUserFailure(err));
  }
}


