'use strict'

class Slugify {
  register (Model, options) {
    Model.queryMacro('whereSlug', function (value) {
      this.where('slug', value)
      return this
    })
  }
}

module.exports = Slugify