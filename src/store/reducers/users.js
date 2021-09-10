import * as constants from "../contants/users";

const INITIAL_STATE = {
  users: [],
  loading: false,
  error: "",
  success: ""
};

export const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.LOADING: return { ...state, loading: true };
    case constants.FETCH_USERS: return { ...state, users: action.payload, loading: false };
    case constants.SUCCESS: return { ...state, loading: false, success: action.payload };
    case constants.ERROR: return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};