'use strict'

const CommunityCategoryRequest = use("App/Requests/CommunityCategory")

class CommunityCategoryController {
  async index ({ request, response }) {
    const result = await CommunityCategoryRequest.requestFetch()

    response.json({
      status: 200,
      data: result
    })
  }

  async findBySlug ({ request, response }) {
    try {
      const { slug } = request.params
      const result = await CommunityCategoryRequest.requestFindBySlug(slug)

      response.json({
        status: 200,
        data: result
      }) 
    } catch (error) {
      response.status(500).json({
        status: 500,
        error_message: error.toString()
      })
    }
  }
}

module.exports = CommunityCategoryController
