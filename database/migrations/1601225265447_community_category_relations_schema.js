'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunityCategoryRelationsSchema extends Schema {
  up () {
    this.create('community_category_relations', (table) => {
      table.increments()
      table.integer('community_id').unsigned()
      table.integer('community_category_id').unsigned()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('community_category_relations')
  }
}

module.exports = CommunityCategoryRelationsSchema
