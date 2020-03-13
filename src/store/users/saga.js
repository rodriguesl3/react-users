import { call, put } from 'redux-saga/effects';

import { api } from "../../services/api";

export function* load(action) {
  try {
    const response = yield call(api.get, "/users");
    yield put(requestUserSuccess(response.data))
  } catch (err) {}
}

// export function* load(action: LoginActionSagas) {
//   try {
//     //const response = yield call(api.get, '')
//     const response: Login = {
//       password: action.payload.password,
//       token: action.payload.token,
//       username: action.payload.username,
//     };

//     console.log('LOGIN ', action.payload);
//     yield put(loginSuccess(response));
//   } catch (err) {
//     toast.error('Error to authenticate your user ' + err);
//     console.log('LOGIN ERROR -> ', err);
//     yield put(loginFailure());
//   }
// }
