import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {gotCurrentTrip} from '../store/current_trip'

class SingleTripCard extends React.Component {
  handleChange = () => {
    this.props.gotCurrentTrip(this.props.userId, this.props.trip.id)
  }

  render() {
    const {name, upcoming, id} = this.props.trip

    return (
      <Link
        to={`/yourtrips/${id}`}
        onClick={() => this.handleChange()}
        className="trip-card"
      >
        <h3>{name}</h3>

        {upcoming && (
          <p>
            <i className="fa fa-star" /> Upcoming
          </p>
        )}
      </Link>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = state => ({
  userId: state.user.id
})

const mapDispatch = dispatch => ({
  gotCurrentTrip: (u, t) => dispatch(gotCurrentTrip(u, t))
})

export default connect(mapState, mapDispatch)(SingleTripCard)
