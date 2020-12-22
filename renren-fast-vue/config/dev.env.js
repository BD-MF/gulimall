'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  OPEN_PROXY: false // 鏄惁寮€鍚唬鐞�, 閲嶇疆鍚庨渶閲嶅惎vue-cli
})
