import { UserTypes, UserState } from './types';

const userReducer = (state = UserState, {type, payload}) => {
  switch (type) {
    case UserTypes.USER_REQUEST:
      return {
        ...state,
        userRequest: true,
        userSuccess: false,
        userFailure: false,
      };
    case UserTypes.USER_SUCCESS:
      return {
        ...state,
        users: payload,
        userRequest: false,
        userSuccess: true,
        userFailure: false,
      };
    case UserTypes.USER_FAILURE:
      return {
        ...state,
        userRequest: true,
        userSuccess: false,
        userFailure: true,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
