import { takeLatest, all } from 'redux-saga/effects';
import { UserTypes } from './users/types';
import { userRequestGenerator } from './users/saga';

export default function* watchSagas() {
  return yield all([takeLatest(UserTypes.USER_REQUEST, userRequestGenerator)]);
}
