'use strict'

/*
|--------------------------------------------------------------------------
| CommunityCategorySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class CommunityCategorySeeder {
  async run () {
    await Factory.model('App/Models/Client/CommunityCategory').createMany(20)
  }
}

module.exports = CommunityCategorySeeder
