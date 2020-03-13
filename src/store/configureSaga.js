import { takeLatest, all, ForkEffect, AllEffect } from 'redux-saga/effects';
import { UserTypes } from './users/types';

export default function* watchSagas(){
  return yield all([
    takeLatest(UserTypes.LOGIN_REQUEST, load),
   
  ]);
}