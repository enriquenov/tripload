import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {gotTrips} from '../store/trip'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  componentDidMount() {
    this.props.fetchTrips(this.props.user.id)
  }

  render() {
    const {firstName} = this.props.user
    return (
      <div>
        <h3>Welcome back, {firstName}!</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  user: state.user
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
