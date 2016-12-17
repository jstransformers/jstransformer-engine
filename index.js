'use strict'

var engine = require('engine')

exports.name = 'engine'
exports.outputFormat = 'html'

/**
 * Register all the provided helpers.
 */
function registerHelpers(engine, helpers) {
  // Add all the helpers.
  for (var name in helpers || {}) {
    if ({}.hasOwnProperty.call(helpers, name)) {
      var helper = null
      switch (typeof helpers[name]) {
        case 'string':
          // eslint-disable-next-line import/no-dynamic-require
          helper = require(helpers[name])
          break
        case 'function':
        default:
          helper = helpers[name]
          break
      }
      if (helper !== null) {
        engine.helper(name, helper)
      }
    }
  }
}

exports.compile = function (str, options) {
  var opts = options || {}
  engine = engine(opts)
  registerHelpers(engine, opts.helpers)
  registerHelpers(engine, opts.partials)
  return engine.compile(str, opts)
}
