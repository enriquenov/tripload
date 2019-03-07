import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_TRIPS = 'GET_TRIPS'

/**
 * INITIAL STATE
 */
const defaultTrips = []

/**
 * ACTION CREATORS
 */
const getTrips = trips => ({type: GET_TRIPS, trips})

/**
 * THUNK CREATORS
 */
export const gotTrips = userId => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/yourtrips`)
    dispatch(getTrips(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultTrips, action) {
  switch (action.type) {
    case GET_TRIPS:
      return action.trips
    default:
      return state
  }
}
