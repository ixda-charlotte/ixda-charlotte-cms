'use strict';

/**
 * Thoughts.js controller
 *
 * @description: A set of functions called "actions" for managing `Thoughts`.
 */

module.exports = {

  /**
   * Retrieve thoughts records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.thoughts.search(ctx.query);
    } else {
      return strapi.services.thoughts.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a thoughts record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.thoughts.fetch(ctx.params);
  },

  /**
   * Count thoughts records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.thoughts.count(ctx.query);
  },

  /**
   * Create a/an thoughts record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.thoughts.add(ctx.request.body);
  },

  /**
   * Update a/an thoughts record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.thoughts.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an thoughts record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.thoughts.remove(ctx.params);
  }
};
