const User = require('./user')
const Trip = require('./trip')
const Adventure = require('./adventure')

// Model's Associations

User.hasMany(Trip)
Trip.belongsTo(User)

Trip.hasMany(Adventure)
Adventure.belongsTo(Trip)

module.exports = {
  User,
  Trip,
  Adventure
}
