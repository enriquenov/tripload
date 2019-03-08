import React from 'react'
import {Link} from 'react-router-dom'

const SingleTripCard = props => {
  const {name, upcoming} = props.trip
  return (
    <Link to="/yourtrips" className="trip-card">
      <h3>{name}</h3>

      {upcoming && (
        <p>
          <i className="fa fa-star" /> Upcoming
        </p>
      )}
    </Link>
  )
}

module.exports = SingleTripCard
