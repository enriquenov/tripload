const router = require('express').Router()
const {User, Trip} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const user = await User.findOne({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email', 'firstName', 'lastName']
    })

    res.json(user)
  } catch (err) {
    next(err)
  }
})

// GET api/users/:userId/yourtrips
router.get('/:userId/yourtrips', async (req, res, next) => {
  try {
    const trips = await Trip.findAll({
      where: {
        userId: req.params.userId
      }
    })
    res.json(trips)
  } catch (err) {
    next(err)
  }
})

// GET api/users/:userId/yourtrips/:tripId
router.get('/:userId/yourtrips/:tripId', async (req, res, next) => {
  try {
    const trip = await Trip.findOne({
      where: {
        id: req.params.tripId,
        userId: req.params.userId
      },
      include: 'adventures'
    })
    res.json(trip)
  } catch (err) {
    next(err)
  }
})
