# jstransformer-engine

[engine](https://github.com/jonschlinkert/engine) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-engine/master.svg)](https://travis-ci.org/jstransformers/jstransformer-engine)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-engine/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-engine?branch=master)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-engine/master.svg)](http://david-dm.org/jstransformers/jstransformer-engine)
[![NPM version](https://img.shields.io/npm/v/jstransformer-engine.svg)](https://www.npmjs.org/package/jstransformer-engine)

## Installation

    npm install jstransformer-engine

## API

```js
var engine = require('jstransformer')(require('jstransformer-engine'))

engine.render('Hello, <%= name %>!', { name: 'World' }).body
//=> 'Hello, World!'
```

## License

MIT
