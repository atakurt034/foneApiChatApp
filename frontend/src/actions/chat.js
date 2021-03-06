import { CHAT } from '../constants/index'
import axios from 'axios'

export const getRooms = () => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT.GET_ROOMS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/chatrooms', config)
    dispatch({ type: CHAT.GET_ROOMS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CHAT.GET_ROOMS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const createRoom = (name) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT.CREATE_ROOM_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post('/api/chatrooms', { name }, config)
    dispatch({ type: CHAT.CREATE_ROOM_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CHAT.CREATE_ROOM_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getRoomDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT.GET_ROOM_DETAILS_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/chatrooms/${id}`, config)
    dispatch({ type: CHAT.GET_ROOM_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CHAT.GET_ROOM_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getMessages = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: CHAT.GET_MESSAGES_REQUEST })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get(`/api/chatrooms/messages/${id}`, config)
    dispatch({ type: CHAT.GET_MESSAGES_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: CHAT.GET_MESSAGES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
