'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunitiesSchema extends Schema {
  up () {
    this.create('communities', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.integer('accessibility').defaultTo(1).comment('1 => Public, 2 => Private')
      table.text('description').nullable()
      table.string('wa_link', 254).nullable()
      table.string('youtube_link', 254).nullable()
      table.string('instagram_link', 254).nullable()
      table.string('line_link', 254).nullable()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('communities')
  }
}

module.exports = CommunitiesSchema
