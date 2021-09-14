import { loading, fetchUsers, error, clear, getAllUsers } from "../actions/users";
import { db } from "../../config/firebase";

export const fetchUserData = (email) => {
  console.log('email', email)
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

export const fetchAllUsers = uid => {
  return async (dispatch) => {
    try {
      await db
        .ref('/users').once('value').then((snapshot) => {
          const users = snapshot.val()
          const filter = Object.keys(users)?.filter(item => item !== uid)
            .map(item => users[item])
          dispatch(getAllUsers(filter))
        });
    } catch (e) {
      dispatch(error("something went wrong, Try later!"));
      return setTimeout(() => dispatch(clear()), 3000)
    }
  }
}