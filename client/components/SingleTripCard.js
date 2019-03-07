import React from 'react'

const SingleTripCard = props => {
  const {name} = props.trip
  return (
    <div className="trip-card">
      <h3>{name}</h3>
    </div>
  )
}

module.exports = SingleTripCard
