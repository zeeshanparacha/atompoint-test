import * as constants from "../contants/users";

export const fetchUsers = (data) => ({
  type: constants.FETCH_USERS,
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
