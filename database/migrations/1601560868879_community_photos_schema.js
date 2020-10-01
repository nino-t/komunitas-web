'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunityPhotosSchema extends Schema {
  up () {
    this.create('community_photos', (table) => {
      table.increments()
      table.integer('community_id').unsigned()
      table.integer('agenda_id').unsigned()
      table.string('title', 254).notNullable()
      table.text('description').nullable()
      table.string('url', 254).notNullable()
      table.string('alt', 254).notNullable()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('community_photos')
  }
}

module.exports = CommunityPhotosSchema
