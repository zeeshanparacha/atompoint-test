import { loading, fetchUsers, error } from "../actions/users";
import axios from "axios";

export const fetchUserData = () => {
  return async (dispatch, getState) => {
    console.log('getState', getState())
    dispatch(loading());
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
      return dispatch(fetchUsers(response.data));
    }
    catch (err) {
      return dispatch(error("Something went wrong!"));
    }
  };
}