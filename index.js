'use strict'

const engine = require('engine')

exports.name = 'engine'
exports.outputFormat = 'html'

/**
 * Register all the provided helpers.
 */
function registerHelpers(engine, helpers) {
  // Add all the helpers.
  for (const name in helpers || {}) {
    if ({}.hasOwnProperty.call(helpers, name)) {
      let helper = null
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
  const opts = options || {}
  const eng = engine(opts)
  registerHelpers(eng, opts.helpers)
  registerHelpers(eng, opts.partials)
  return eng.compile(str, opts)
}
