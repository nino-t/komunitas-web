'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AgendaSchema extends Schema {
  up () {
    this.create('agenda', (table) => {
      table.increments()
      table.integer('community_id').unsigned()
      table.string('name', 254).notNullable()
      table.text('description').nullable()
      table.timestamp('start_at').notNullable()
      table.timestamp('end_at').notNullable()
      table.string('location', 254).notNullable()
      table.string('thumbnail', 254).notNullable()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('agenda')
  }
}

module.exports = AgendaSchema
