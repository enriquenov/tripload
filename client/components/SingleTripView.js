import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class SingleTripView extends React.Component {
  render() {
    return (
      <div>
        <h1>Current Trip: {this.props.currentTrip.name}</h1>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  currentTrip: state.currentTrip
})

export default connect(mapState)(SingleTripView)

/**
 * PROP TYPES
 */
SingleTripView.propTypes = {
  currentTrip: PropTypes.object
}
