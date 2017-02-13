/**
 * PostController
 *
 * @description :: Server-side logic for managing Posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  test: function (req, res) {
    return res.ok({result: req.allParams()});
  }
};

