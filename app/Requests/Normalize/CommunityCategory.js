'use strict'

const _get = use('lodash/get')

class CommunityCategory {
  normalizeObject (object) {
    return {
      id: object.id,
      type: 'community-category',
      attributes: {
        name: object.name,
        slug: object.slug,
        thumbnail: object.thumbnail,
        created_at: object.created_at,
        updated_at: object.updated_at
      }
    }
  }

  normalizeArray (array) {
    if (array) {
      const _self = this
      return array.map(function(item, index) {
        return _self.normalizeObject(item)
      })
    }

    return array
  }

  normalize (result, isOne = false) {
    const rows = _get(result, 'rows', [])
    if (!rows[0]) {
      return null
    }

    return isOne === false ? 
        this.normalizeArray(rows)
      :
        this.normalizeObject(rows[0])
  }
}

module.exports = new CommunityCategory()