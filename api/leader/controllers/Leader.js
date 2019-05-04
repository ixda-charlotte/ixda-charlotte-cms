'use strict';

/**
 * Leader.js controller
 *
 * @description: A set of functions called "actions" for managing `Leader`.
 */

module.exports = {

  /**
   * Retrieve leader records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.leader.search(ctx.query);
    } else {
      return strapi.services.leader.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a leader record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.leader.fetch(ctx.params);
  },

  /**
   * Count leader records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.leader.count(ctx.query);
  },

  /**
   * Create a/an leader record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.leader.add(ctx.request.body);
  },

  /**
   * Update a/an leader record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.leader.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an leader record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.leader.remove(ctx.params);
  }
};
