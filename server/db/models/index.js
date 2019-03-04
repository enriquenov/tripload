const User = require('./user')
const Trip = require('./trip')
const Adventure = require('./adventure')
const Transition = require('./transition')

// Model's Associations

User.hasMany(Trip)
Trip.belongsTo(User)

Trip.hasMany(Adventure)
Trip.hasMany(Transition)
Adventure.belongsTo(Trip)
Transition.belongsTo(Trip)

module.exports = {
  User,
  Trip,
  Adventure,
  Transition
}
