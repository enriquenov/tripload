const Sequelize = require('sequelize')
const db = require('../db')

const Transition = db.define('transition', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'Cross-adventure'
  },
  type: {
    type: Sequelize.ENUM('Ground', 'Air', 'Ocean')
  }
})

module.exports = Transition
