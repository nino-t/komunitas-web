'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class CommunityCategory extends Model {
  static get table () {
    return 'community_categories'
  }

  static boot () {
    super.boot()
    this.addTrait('Activefy')
    this.addTrait('Slugify')
  }
}

module.exports = CommunityCategory
