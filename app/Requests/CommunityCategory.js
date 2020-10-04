'use strict'

const Redis = use('Redis')
const CommunityCategory = use("App/Models/Client/CommunityCategory")
const CommunityCategoryNormalize = use("App/Requests/Normalize/CommunityCategory")

class Request {
  async requestFetch () {
    const redisKey = 'komunitas-api:v1:community-category:fetch'
    const cached = await Redis.get(redisKey)
    
    if (cached) {
      return JSON.parse(cached)
    }

    const result = await CommunityCategory.query().whereActive().fetch()
    const normalResult = CommunityCategoryNormalize.normalize(result)

    await Redis.set(redisKey, JSON.stringify(normalResult))
    return normalResult
  }

  async requestFindBySlug (slug) {
    const redisKey = `komunitas-api:v1:community-category:slug:${slug}`
    const cached = await Redis.get(redisKey)

    if (cached) {
      return JSON.parse(cached)
    }

    const result = await CommunityCategory.query().whereActive().whereSlug(slug).fetch()
    if (result.rows.length === 1) {
      const normalResult = CommunityCategoryNormalize.normalize(result, true)

      await Redis.set(redisKey, JSON.stringify(normalResult))
      return normalResult
    } else {
      throw new Error("No categories were found");
    }
  }
}

module.exports = new Request()