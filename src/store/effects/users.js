import { loading, fetchUsers, error, clear } from "../actions/users";
import { db } from "../../config/firebase";

export const fetchUserData = (email) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      db.ref('/').child("employees").orderByChild("email")
        .equalTo(email).once('value', (snapshot) => {
          const data = snapshot.val();
          dispatch(fetchUsers(data));
          dispatch(clear())
        })
    }
    catch (err) {
      return dispatch(clear())
    }
  };
}
