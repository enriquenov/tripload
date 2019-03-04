const Sequelize = require('sequelize')
const db = require('../db')

const Adventure = db.define('adventure', {
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
  }
})

module.exports = Adventure
