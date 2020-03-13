import { UserTypes, UserState } from "./types";

const userReducer = (state = UserState, action) => {
  switch (action.type) {
    case UserTypes.USER_REQUEST:
      return {
        ...state,
        users: state.users,
        userRequest: true,
        userSuccess: false,
        userFailure: false
      };
    case UserTypes.USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        userRequest: false,
        userSuccess: true,
        userFailure: false
      };
    case UserTypes.USER_FAILURE:
      return {
        ...state,
        users: state.users,
        userRequest: true,
        userSuccess: false,
        userFailure: true
      };
    default:
      return { ...state };
  }
};

export default userReducer;
