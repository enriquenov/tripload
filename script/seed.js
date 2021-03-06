'use strict'

const db = require('../server/db')
const {User, Trip, Adventure, Transition} = require('../server/db/models')

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
      upcoming: true,
      userId: 1
    }),
    Trip.create({
      name: 'England & Ireland!',
      upcoming: false,
      userId: 1
    }),
    Trip.create({
      name: 'Back to Peru!',
      upcoming: false,
      userId: 1
    }),
    Trip.create({
      name: 'Maybe Miami?',
      upcoming: false,
      userId: 1
    }),
    Trip.create({
      name: 'Portugal & Spain - 2019',
      upcoming: true,
      userId: 2
    }),
    Trip.create({
      name: 'England & Ireland!',
      upcoming: false,
      userId: 2
    })
  ])

  console.log(`seeded ${trips.length} trips`)

  const adventures = await Promise.all([
    Adventure.create({
      name: 'Madeira',
      tripId: 1
    }),
    Adventure.create({
      name: 'Coimbra!',
      tripId: 1
    }),
    Adventure.create({
      name: 'Ourense',
      tripId: 1
    }),
    Adventure.create({
      name: 'Santiago de Compostela',
      tripId: 1
    }),
    Adventure.create({
      name: 'Porto',
      tripId: 1
    }),
    Adventure.create({
      name: 'Lisbon',
      tripId: 1
    })
  ])

  console.log(`seeded ${adventures.length} adventures`)

  const transitions = await Promise.all([
    Transition.create({
      tripId: 1
    }),
    Transition.create({
      tripId: 1
    })
  ])

  console.log(`seeded ${transitions.length} transitions`)
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
