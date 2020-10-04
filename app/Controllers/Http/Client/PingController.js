'use strict'

class PingController {
  index ({ request, response }) {
    response.send('PONG')
  }
}

module.exports = PingController
