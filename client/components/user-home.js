import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {gotTrips} from '../store/trip'
import SingleTripCard from './SingleTripCard'

/**
 * COMPONENT
 */

export class UserHome extends React.Component {
  componentDidMount() {
    this.props.fetchTrips(this.props.userId)
  }

  render() {
    const {firstName} = this.props
    return (
      <div className="container">
        <h3>Hi, {firstName}!</h3>
        <p>Here are your current trips:</p>

        <div className="trips-cards-container">
          {!this.props.trips.length ? (
            <p>Loading...</p>
          ) : (
            this.props.trips.map(trip => {
              console.log('TRIP', trip)
              return <SingleTripCard key={trip.id} trip={trip} />
            })
          )}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  firstName: state.user.firstName,
  userId: state.user.id,
  trips: state.trip
})

const mapDispatch = dispatch => ({
  fetchTrips: id => dispatch(gotTrips(id))
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string
}
