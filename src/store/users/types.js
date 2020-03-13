export const UserAPIInitial = {
  id: 0,
  name: "",
  username: "",
  email: "z",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: {
      lat: "",
      lng: ""
    }
  },
  phone: "",
  website: "",
  company: {
    name: "",
    catchPhrase: "",
    bs: ""
  }
};

export const UserState = {
  users:[],
  userRequest: true,
  userSuccess: false,
  userFailure: false
}

export const UserTypes = {
  USER_REQUEST: '@@users/USER_REQUEST',
  USER_SUCCESS: '@@users/USER_SUCCESS',
  USER_FAILURE: '@@users/USER_FAILURE',
}

