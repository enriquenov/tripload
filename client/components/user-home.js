import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import SingleTripCard from './SingleTripCard'

export class UserHome extends React.Component {
  render() {
    return (
      <div className="container-fluid home">
        <div className="container">
          <h2 className="main-title">Your Trips</h2>

          <div className="trips-cards-container">
            {!this.props.trips.length ? (
              <p>Loading...</p>
            ) : (
              this.props.trips.map(trip => {
                return <SingleTripCard key={trip.id} trip={trip} />
              })
            )}
          </div>
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
  trips: state.trips
})

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  firstName: PropTypes.string
}
