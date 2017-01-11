var request_api = require('./request_api');
var getApiResponseName = require('./util/getApiResponseName');

function TopClient(key, secret, endpoint, options) {
  if (typeof endpoint === 'object' && !options) {
    options = endpoint
    endpoint = options.endpoint;
  }
  if (!options) options = {};
  if (!endpoint) endpoint = 'https://eco.taobao.com/router/rest';
  var useValidators = true, rawResponse = false;
  if (typeof options.useValidators === 'boolean') useValidators = options.useValidators;
  if (typeof options.rawResponse === 'boolean') rawResponse = options.rawResponse;
  this.execute = function (method, args, type, callback) {
    if (typeof type === 'function') {
      callback = type;
      type = null;
    }
    var piped = false;
    var proc = Promise.resolve().then(function () {
      if (piped) return;
      return new Promise(function (f, r) {
        if (useValidators) require('./validator')(method, args);
        args = Object.assign({}, args, { method: method, app_key: key });
        request_api(endpoint, args, secret, type, function (err, data) {
          if (rawResponse) {
            f(data);
            return;
          }
          if (err) {
            return r(err);
          }
          var responseName = getApiResponseName(method), response = data[responseName];
          f(response);
        });
      });
    }).then(function (response) {
      if (typeof callback === 'function') callback(null, response);
      return response;
    }).catch(function (e) {
      if (typeof callback === 'function') callback(e);
      throw e;
    });
    
    if (typeof callback !== 'function') {
      proc.pipe = function(stream) {
        if (useValidators) require('./validator')(method, args);
        args = Object.assign({}, args, { method: method, app_key: key });
        request_api(endpoint, args, secret, type).pipe(stream);
      }
      return proc;
    }
  }
}

module.exports = TopClient;
