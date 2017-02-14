# assert-my-json-valid [![Build Status](https://travis-ci.org/ajoslin/assert-my-json-valid.svg?branch=master)](https://travis-ci.org/ajoslin/assert-my-json-valid)

> Use is-my-json-valid to validate, throw if error

## Install

```
$ npm install --save assert-my-json-valid
```


## Usage

```js
var assertMyJsonValid = require('assert-my-json-valid')

var schema = {
  type: 'string'
}

try {
  assertMyJsonValid(schema, 1)
} catch (e) {
  console.log(e) // => '[ValidationError]: string data is the wrong type (value: 1)'
}

assertMyJsonValid(schema, 'foo') // no error
```

## API

#### `assertMyJsonValid(schema, value)` -> `output`

Validates `value` against `schema` and throws a ValidationError if not valid.

It will only create a JSON validator once for each `schema` reference.

## License

MIT © [Andrew Joslin](http://ajoslin.com)
