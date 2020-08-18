
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./livescorereactcomponents.cjs.production.min.js')
} else {
  module.exports = require('./livescorereactcomponents.cjs.development.js')
}
