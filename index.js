'use strict'

var validator = require('is-my-json-valid')
var createStore = require('weakmap-shim/create-store')
var ValidationError = require('error/validation')

var validatorStore = createStore()

module.exports = function assertMyJsonValid (value, schema) {
  var store = validatorStore(schema)

  var validate = store.validate ||
    (store.validate = validator(schema, {verbose: true}))

  validate(value)

  if (validate.errors && validate.errors.length) {
    var error = mapError(validate.errors[0], schema)
    throw ValidationError([error])
  }
}

function mapError (error, schema) {
  return {
    message: [
      schema.title ? (schema.title + ':') : '',
      error.type,
      error.field,
      error.message,
      '. Value: ' +
        (typeof error.value === 'object' ? JSON.stringify(error.value) : error.value)
    ]
      .filter(Boolean)
      .join(' ')
  }
}
