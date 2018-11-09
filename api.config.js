/**
 * @file Api config / Commonjs module
 * @module api.config
 * @author Surmon <https://github.com/surmon-china>
 */

const { isProdMode } = require('./environment')

module.exports = {
  cdnUrl: isProdMode ? 'https://cdn.qugushi.net' : '',
  proxyUrl: isProdMode ? 'https://www.qugushi.net/proxy/' : '/proxy/',
  baseUrl: isProdMode ? 'https://api.qugushi.net' : 'http://localhost:8000',
  socketHost: isProdMode ? 'https://www.qugushi.net' : 'http://localhost:3000'
}
