/**
 * Define task
 * @function define
 * @param {Object} bindings - Hosts bindings
 * @param {Object} [options={}] - Optional settings
 * @returns {function} Defined task
 */
'use strict'

const hostile = require('hostile')

/** @lends define */
function define (bindings, options = {}) {
  async function task (ctx) {
    const list = await new Promise((resolve, reject) =>
      hostile.get(false, (e, d) => e ? reject(e) : resolve(d))
    )
    const known = list.reduce((known, [ip, hostname]) => ({
      ...known,
      [hostname]: [...(known[hostname] || []), ip],
    }), {})
    for (const [hostname, ip] of Object.entries(bindings)) {
      const skip = (known[hostname] || []).includes(ip)
      if (skip) {
        continue
      }
      await new Promise((resolve, reject) =>
        hostile.set(ip, hostname, (e) => e ? reject(e) : resolve())
      )
    }
  }

  return Object.assign(task,
    // Define sub tasks here
    {}
  )
}

module.exports = define
