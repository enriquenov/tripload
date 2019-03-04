const Sequelize = require('sequelize')
const db = require('../db')

const Trip = db.define('trip', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  startsAt: {
    type: Sequelize.DATE,
    allowNull: true
  },
  endsAt: {
    type: Sequelize.DATE,
    allowNull: true
  },
  status: {
    type: Sequelize.ENUM('open', 'archived')
  },
  upcoming: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  backgroundColor: {
    type: Sequelize.STRING,
    defaultValue: '#026aa7'
  }
})

module.exports = Trip
