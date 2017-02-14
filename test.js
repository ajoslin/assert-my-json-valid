'use strict'

var test = require('tape')
var assertValid = require('./')

test(function (t) {
  var schema = {
    title: 'Foo',
    type: 'string'
  }

  t.throws(() => assertValid(1, schema), 'Foo: string data is the wrong type. Value: 1')
  t.throws(() => assertValid({}, schema), 'Foo: string data is the wrong type. Value: {}')
  assertValid('s', schema)

  t.end()
})
