/**
 * Pon task to change hosts
 * @module pon-task-hosts
 * @version 1.0.0
 */

'use strict'

const define = require('./define')

const lib = define.bind(this)

Object.assign(lib, define, {
  define
})

module.exports = lib
