import * as constants from "../contants/users";

export const fetchUsers = (data) => ({
  type: constants.FETCH_USERS,
  payload: data
})


export const changeMonth = (data) => ({
  type: constants.CHANGE_MONTH,
  payload: data
})

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

export const getAllUsers = (users) => {
  return {
    type: constants.ALL_USERS,
    payload: users
  }
}

export const setUser = (email) => {
  return {
    type: constants.SET_USER,
    payload: email
  }
}