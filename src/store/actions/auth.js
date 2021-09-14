import * as constants from "../contants/auth";

export const login = (user) => {
  return {
    type: constants.LOGIN,
    payload: user
  }
}

export const signUp = (user) => {
  return {
    type: constants.SIGNUP,
    payload: user
  }
}


export const loading = (boolean) => ({
  type: constants.LOADING,
  payload: boolean
})

export const error = (message) => ({
  type: constants.ERROR,
  payload: message
})

export const success = (message) => ({
  type: constants.SUCCESS,
  payload: message
})

export const clear = () => ({
  type: constants.CLEAR,
})

export const logOut = () => ({
  type: constants.LOGOUT,
})



