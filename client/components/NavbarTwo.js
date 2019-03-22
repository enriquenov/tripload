import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {gotTrips} from '../store/trip'
// import {Link} from 'react-router-dom'

class NavbarTwo extends React.Component {
  componentDidMount() {
    this.props.fetchTrips(this.props.user.id)
  }

  render() {
    const {isLoggedIn, user} = this.props

    return (
      <div className="navbar-two">
        <nav>
          {isLoggedIn && (
            <div>
              {/* The navbar will show these links after you log in */}
              <h3>Hi, {user.firstName}!</h3>
            </div>
          )}
        </nav>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  isLoggedIn: !!state.user.id,
  user: state.user
})

const mapDispatch = dispatch => ({
  fetchTrips: id => dispatch(gotTrips(id))
})

export default connect(mapState, mapDispatch)(NavbarTwo)

/**
 * PROP TYPES
 */
NavbarTwo.propTypes = {
  fetchTrips: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired
}
