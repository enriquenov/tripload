import React from 'react'

const SingleTripCard = props => {
  const {name, upcoming} = props.trip
  return (
    <div className="trip-card">
      <h3>{name}</h3>

      {upcoming && (
        <p>
          <i className="fa fa-star" /> Upcoming
        </p>
      )}
    </div>
  )
}

module.exports = SingleTripCard
