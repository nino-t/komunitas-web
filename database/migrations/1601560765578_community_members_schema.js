'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommunityMembersSchema extends Schema {
  up () {
    this.create('community_members', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('community_id').unsigned()
      table.integer('community_member_role_id').unsigned()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('community_members')
  }
}

module.exports = CommunityMembersSchema
