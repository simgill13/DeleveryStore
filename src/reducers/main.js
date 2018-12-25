import { USER_NAME, LOGIN_ERROR } from "../actions/action";

const initialState = {};

const main = (state = initialState, action) => {
  switch (action.type) {
    case USER_NAME:
      return Object.assign({}, state, {
        name: action.name
      });
    case LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.error
      });
  }
  return state;
};

export default main;
