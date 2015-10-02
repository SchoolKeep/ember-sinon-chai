/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-sinon-chai',

  init: function(name) {
    var assets_path = require("path").join("sinon-chai", "lib", "sinon-chai.js");
    this.treePaths["vendor"] = require.resolve("sinon-chai").replace(assets_path, "");
  },

  included: function(app) {
    if (app.tests) {
      app.import("vendor/sinon-chai/lib/sinon-chai.js", {
        type: 'test',
        exports: { "sinon-chai": ["default"] }
      });
    }
  }
};
