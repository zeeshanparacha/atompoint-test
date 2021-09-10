import { loading, error, login, signUp, success, clear, logOut } from "../actions/auth";
import { auth, db } from "../../config/firebase";
import history from "../../utils/history";

export const signIn = (email, password) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await auth.signInWithEmailAndPassword(email, password)
      dispatch(getUser(response.user.uid))
      history.push("/dashboard")
      return setTimeout(() => dispatch(clear()), 3000)
    } catch (e) {
      const code = e.code;
      let message = "Could not sign in at the moment, Try later"
      if (code === 'auth/wrong-password' || code === 'auth/user-not-found') {
        message = 'Invalid email or password'
      }
      dispatch(error(message));
      return setTimeout(() => dispatch(clear()), 3000)
    }
  }
}

export const getUser = uid => {
  return async (dispatch) => {
    try {
      await db
        .ref('/users/' + uid).once('value').then((snapshot) => {
          dispatch(login(snapshot.val()))
        });
    } catch (e) {
      alert(e)
    }
  }
}

export const register = (email, password) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      const response = await auth.createUserWithEmailAndPassword(email, password)
      if (response.user.uid) {
        const _id = response.user.uid;
        const user = {
          _id,
          email
        }
        db.ref('users/' + _id).set(user);
        dispatch(signUp(user))
        dispatch(success("Your profile has been created."))
        return setTimeout(() => {
          dispatch(clear())
          history.push("/")
        }, 3000)
      }
    } catch (e) {
      const code = e.code;
      let message = "Could not create user at the moment, Please try later!"
      if (code === 'auth/email-already-in-use') {
        message = 'An account with this email already exists'
      }
      dispatch(error(message));
      return setTimeout(() => dispatch(clear()), 3000)
    }
  }
}

export const sendResetEmail = (email) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await auth.sendPasswordResetEmail(email)
      dispatch(success("An email to reset your password has been sent!"))
      return setTimeout(() => dispatch(clear()), 3000)
    } catch (e) {
      const code = e.code;
      let message = "Please try later"
      if (code === 'auth/user-not-found') {
        message = 'An account using this email does not exists'
      }
      dispatch(error(message));
      return setTimeout(() => dispatch(clear()), 3000)
    }
  }
}

export const verifyPasswordResetCode = (code) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await auth.verifyPasswordResetCode(code)
      return setTimeout(() => dispatch(clear()), 3000)
    } catch (e) {
      dispatch(error("Your link has been expired, Try resetting your password again."));
      return setTimeout(() => dispatch(clear()), 3000)
    }
  }
}

export const confirmResetPassword = (code, password) => {
  return async (dispatch) => {
    dispatch(loading());
    try {
      await auth.confirmPasswordReset(code, password)
      dispatch(success("Password changed, You can now sign in with your new password"))
      return setTimeout(() => dispatch(clear()), 3000)
    } catch (e) {
      dispatch(error("Your link has been expired, Try resetting your password again."));
      return setTimeout(() => dispatch(clear()), 3000)
    }
  }
}

export const signOut = () => {
  return async (dispatch) => {
    try {
      auth.signOut().then(() => dispatch(logOut()))
    } catch (e) {
      dispatch(error(e));
      return setTimeout(() => dispatch(clear()), 3000)
    }
  }
}
