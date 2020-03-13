import { takeLatest, all, ForkEffect, AllEffect } from 'redux-saga/effects';
import { UserTypes } from './users/types';
import { userRequestGenerator } from './users/saga';

export default function* watchSagas() {
  return yield [takeLatest(UserTypes.USER_REQUEST, userRequestGenerator)];
}
