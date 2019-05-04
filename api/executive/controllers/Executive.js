'use strict';

/**
 * Executive.js controller
 *
 * @description: A set of functions called "actions" for managing `Executive`.
 */

module.exports = {

  /**
   * Retrieve executive records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.executive.search(ctx.query);
    } else {
      return strapi.services.executive.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a executive record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.executive.fetch(ctx.params);
  },

  /**
   * Count executive records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.executive.count(ctx.query);
  },

  /**
   * Create a/an executive record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.executive.add(ctx.request.body);
  },

  /**
   * Update a/an executive record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.executive.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an executive record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.executive.remove(ctx.params);
  }
};
