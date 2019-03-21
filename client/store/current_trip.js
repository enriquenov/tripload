import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CURRENT_TRIP = 'GET_CURRENT_TRIP'

/**
 * INITIAL STATE
 */
const defaultCurrentTrip = {}

/**
 * ACTION CREATORS
 */
const getCurrentTrip = trip => ({type: GET_CURRENT_TRIP, trip})

/**
 * THUNK CREATORS
 */
export const gotCurrentTrip = (userId, tripId) => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/yourtrips/${tripId}`)

    dispatch(getCurrentTrip(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultCurrentTrip, action) {
  switch (action.type) {
    case GET_CURRENT_TRIP:
      return action.trip
    default:
      return state
  }
}
