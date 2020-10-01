'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunityMemberRolesSchema extends Schema {
  up () {
    this.create('community_member_roles', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.text('description').nullable()
      table.integer('level').unsigned()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('community_member_roles')
  }
}

module.exports = CommunityMemberRolesSchema
