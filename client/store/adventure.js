import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_ADVENTURES = 'GET_ADVENTURES'

/**
 * INITIAL STATE
 */
const defaultAdventures = []

/**
 * ACTION CREATORS
 */
const getAdventures = adventures => ({type: GET_ADVENTURES, adventures})

/**
 * THUNK CREATORS
 */
export const gotAdventures = (userId, tripId) => async dispatch => {
  try {
    const res = await axios.get(`/api/users/${userId}/yourtrips/${tripId}`)

    dispatch(getAdventures(res.data))
  } catch (err) {
    console.error(err)
  }
}

/**
 * REDUCER
 */
export default function(state = defaultAdventures, action) {
  switch (action.type) {
    case GET_ADVENTURES:
      return action.trips
    default:
      return state
  }
}
