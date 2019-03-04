'use strict'

const db = require('../server/db')
const {User, Trip} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Enrique',
      lastName: 'Novoa',
      email: 'enrique@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Christopher',
      lastName: 'Payne',
      email: 'chris@email.com',
      password: '0904'
    })
  ])

  console.log(`seeded ${users.length} users`)

  const trips = await Promise.all([
    Trip.create({
      name: 'Portugal & Spain - 2019',
      upcoming: true
    }),
    Trip.create({
      name: 'Ireland!',
      upcoming: false
    })
  ])

  console.log(`seeded ${trips.length} trips`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
