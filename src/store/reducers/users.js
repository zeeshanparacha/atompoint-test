import * as constants from "../contants/users";

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: "",
  success: "",
  month: "Mar"
};

export const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case constants.LOADING: return { ...state, loading: true };
    case constants.CHANGE_MONTH: return { ...state, month: action.payload };
    case constants.FETCH_USERS: return { ...state, data: action.payload, loading: false };
    case constants.SUCCESS: return { ...state, loading: false, success: action.payload };
    case constants.ERROR: return { ...state, loading: false, error: action.payload };
    case constants.CLEAR: return { ...state, loading: false, error: "", success: "" };
    default:
      return state;
  }
};