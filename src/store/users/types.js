export const UserState = {
  users: [],
  userRequest: false,
  userSuccess: false,
  userFailure: false,
};

export const UserTypes = {
  USER_REQUEST: '@@users/USER_REQUEST',
  USER_SUCCESS: '@@users/USER_SUCCESS',
  USER_FAILURE: '@@users/USER_FAILURE',
  USER_FILTER: '@@users/USER_FILTER',
};
