import { LOGIN_SUCCESS, LOGIN_FAIL, SET_NOTES } from './Actions'
import axios from 'axios'
import { baseUrl } from '../utils/serverdetails'

export const setUser = payload => {
  return {
    type: LOGIN_SUCCESS,
    payload: payload
  }
}

export const loginFailed = () => {
  return {
    type: LOGIN_FAIL
  }
}

export const setNotes = payload => {
  return {
    type: SET_NOTES,
    payload: payload
  }
}

export const fetchNotes = email => {
  console.log('email is : ', email)
  return dispatch => {
    return axios
      .get(`${baseUrl}/notes/getbyemail/${email}`)
      .then(response => {
        console.log('notes are ', response.data.notes)
        dispatch(setNotes(response.data.notes))
      })
      .catch(error => {
        console.log(error)
      })
  }
}
