'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ColumnSlugCommunityCategoriesSchema extends Schema {
  up () {
    this.table('community_categories', (table) => {
      table.string('slug', 254).notNullable().unique()
    })
  }

  down () {
    this.table('community_categories', (table) => {
      table.dropColumn('slug')
    })
  }
}

module.exports = ColumnSlugCommunityCategoriesSchema
