'use strict'

const Engine = require('engine')

exports.name = 'engine'
exports.outputFormat = 'html'

/**
 * Register all the provided helpers.
 */
function register(engine, helpers) {
  // Add all the helpers.
  for (const name in helpers || {}) {
    if ({}.hasOwnProperty.call(helpers, name)) {
      if (typeof helpers[name] === 'string') {
        // eslint-disable-next-line import/no-dynamic-require
        engine.helper(name, require(helpers[name]))
        continue
      }
      if (typeof helpers[name] === 'function') {
        engine.helper(name, helpers[name])
        continue
      }
      throw new Error('Invalid helpers type')
    }
  }
}

exports.compile = function (str, options) {
  const opts = Object.assign({}, options)
  const eng = new Engine(opts)

  register(eng, opts.helpers)
  return eng.compile(str, opts)
}
