import * as constants from "../contants/auth";

const INITIAL_STATE = {
  loading: false,
  error: "",
  user: JSON.parse(localStorage.getItem('user')),
  success: "",
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.LOGIN: localStorage.setItem('user', JSON.stringify(action.payload));
      return { ...state, loading: false, user: action.payload }
    case constants.SIGNUP: return { ...state, loading: false }
    case constants.LOADING: return { ...state, loading: true };
    case constants.SUCCESS: return { ...state, loading: false, success: action.payload };
    case constants.ERROR: return { ...state, loading: false, error: action.payload };
    case constants.CLEAR: return { ...state, loading: false, error: "", success: "" };
    case constants.LOGOUT: localStorage.removeItem('user'); return { ...state, user: null, loading: false, error: "" };
    default:
      return state;
  }
};