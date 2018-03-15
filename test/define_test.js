/**
 * Test case for define.
 * Runs with mocha.
 */
'use strict'

const define = require('../lib/define.js')
const writeout = require('writeout')
const hostile = require('hostile')
const ponContext = require('pon-context')
const {ok} = require('assert')

describe('define', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Define', async () => {
    const mockHosts = `${__dirname}/../tmp/mock-hosts`
    await writeout(mockHosts, `127.0.0.1	localhost`, {mkdirp: true})
    const {HOSTS} = hostile
    hostile.HOSTS = mockHosts
    const ctx = ponContext({})
    const task = define({
      'local.pon-task-hosts.test': '127.0.0.1'
    }, {})
    ok(task)

    await Promise.resolve(task(ctx))

    hostile.HOSTS = HOSTS
  })
})

/* global describe, before, after, it */
