'use strict';

var Engine = require('engine');

exports.name = 'engine';
exports.outputFormat = 'html';

/**
 * Register all the provided helpers.
 */
function registerHelpers(engine, helpers) {
  // Add all the helpers.
  for (var name in helpers || {}) {
    var helper = null;
    switch (typeof helpers[name]) {
      case "string":
        helper = require(helpers[name]);
        break;
      case "function":
      default:
        helper = helpers[name];
        break;
    }
    if (helper !== null) {
      engine.helper(name, helper);
    }
  }
}

exports.compile = function (str, options) {
  var opts = options || {};
  var engine = Engine(opts);
  registerHelpers(engine, opts.helpers);
  registerHelpers(engine, opts.partials);
  return engine.compile(str, opts);
};
