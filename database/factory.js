'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const _kebabCase = use("lodash/kebabCase") 

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

// Post blueprint
Factory.blueprint('App/Models/Client/CommunityCategory', (faker) => {
  const name = faker.profession()
  return {
    name: name,
    slug: _kebabCase(name),
    description: faker.sentence()
  }
})