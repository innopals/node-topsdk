var md5 = require('./md5');
/**
 * Sign API request.
 * see http://open.taobao.com/doc/detail.htm?id=111#s6
 *
 * @param  {String} secret
 * @param  {Object} params
 * @return {String} sign string
 */
module.exports = function sign(secret, args) {
  var sorted = Object.keys(args).sort();
  var basestring = sorted.map(function(key) { return key + args[key]; }).join('');
  basestring = secret + basestring + secret;
  return md5(basestring).toUpperCase();
}
