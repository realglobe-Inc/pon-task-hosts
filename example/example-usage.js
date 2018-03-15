'use strict'

const pon = require('pon')
const ponTaskHosts = require('pon-task-hosts')

;(async () => {
  let run = pon({
    hosts: ponTaskHosts({
      'peercdn.com': '\'127.0.0.1\''
    })
  })

  run('hosts')
}).catch((err) => console.error(err))
