import { action } from 'typesafe-actions';
import { UserTypes } from './types';


export const requestUsers = () => action(UserTypes.USER_REQUEST);
export const requestUsersSuccess = users => action(UserTypes.USER_SUCCESS, users);
export const requestUserFailure = error => action(UserTypes.USER_FAILURE, error);
