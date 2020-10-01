'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttendanceStatusSchema extends Schema {
  up () {
    this.create('attendance_statuses', (table) => {
      table.increments()
      table.string('name', 254).notNullable().unique()
      table.text('description').nullable()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('attendance_statuses')
  }
}

module.exports = AttendanceStatusSchema
