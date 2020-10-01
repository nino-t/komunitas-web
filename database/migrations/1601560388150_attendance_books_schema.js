'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AttendanceBooksSchema extends Schema {
  up () {
    this.create('attendance_books', (table) => {
      table.increments()
      table.integer('user_id').unsigned()
      table.integer('agenda_id').unsigned()
      table.integer('attendance_status_id').unsigned()
      table.timestamp('created_at').defaultTo(this.fn.now())
      table.timestamp('updated_at').defaultTo(this.fn.now())
      table.timestamp('deleted_at').nullable()
      table.integer('status').defaultTo(1)
    })
  }

  down () {
    this.drop('attendance_books')
  }
}

module.exports = AttendanceBooksSchema
