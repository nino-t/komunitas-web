'use strict'

class Activefy {
  register (Model, options = {}) {
    Model.queryMacro('whereActive', function (value) {
      this.where('status', 1)
      return this
    })
  }
}

module.exports = Activefy
