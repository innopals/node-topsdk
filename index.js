var request = require('request');
var JSON = require('json-bigint')({ "storeAsString": true });
var Stream = require('stream');
var util = require('./util');
var http = require('http');
var agent = new http.Agent({ keepAlive: true, keepAliveMsecs: 5000 });

function _wrapJSON(s) {
  var matchs = s.match(/\"id\"\:\s?\d{16,}/g);
  if (matchs) {
    for (var i = 0; i < matchs.length; i++) {
      var m = matchs[i];
      s = s.replace(m, '"id":"' + m.split(':')[1].trim() + '"');
    }
  }
  return s;
};

var IGNORE_ERROR_CODES = {
  'isv.user-not-exist:invalid-nick': 1
};

var REQUEST_TYPES = {
  "get": "GET",
  "post": "POST",
  "file_upload": "FILE_UPLOAD"
};

/**
 * Sign API request.
 * see http://open.taobao.com/doc/detail.htm?id=111#s6
 *
 * @param  {String} secret
 * @param  {Object} params
 * @return {String} sign string
 */
function sign(secret, args) {
  var sorted = Object.keys(args).sort();
  var basestring = sorted.map(function(key) { return key + args[key]; }).join('');
  basestring = secret + basestring + secret;
  return util.md5(basestring).toUpperCase();
}

function request_api(endpoint, args, secret, type, callback) {
  if (typeof type === 'function') {
    callback = type;
    type = null;
  }
  var err = util.checkRequired(args, 'method');
  if (err) {
    return callback(err);
  }
  type = REQUEST_TYPES[String(type).toLowerCase()] || "POST";
  args = Object.assign({
    timestamp: util.YYYYMMDDHHmmss(),
    format: 'json',
    v: '2.0',
    sign_method: 'md5'
  }, args);
  var args2sign = {};

  Object.keys(args).forEach(function(key) {
    var value = args[key];
    if (value instanceof Buffer || value.value instanceof Buffer || value instanceof Stream || value.value instanceof Stream) {
      // TODO buffer without filename is not accepted.
      if (type !== 'FILE_UPLOAD') {
        delete args[key];
      }
      return;
    }
    if (typeof value === 'object') args[key] = JSON.stringify(value);
    args2sign[key] = value;
  });

  args.sign = sign(secret, args2sign);

  var options = {
    url: endpoint,
    method: type != 'GET' ? 'POST' : 'GET',
    [type === 'FILE_UPLOAD' ? "formData" : "form"]: args,
    agent: agent
  };

  request(options, function(err, response, buffer) {
    var data;
    if (buffer) {
      buffer = _wrapJSON(buffer.toString());
      try {
        data = JSON.parse(buffer);
      } catch (e) {
        err = e;
        e.data = buffer.toString();
        data = null;
      }
    }
    var errRes = data && data.error_response;
    if (errRes) {
      if (!errRes.sub_msg || !IGNORE_ERROR_CODES[errRes.sub_code]) {
        // no sub_msg error, let caller handle it.
        var msg = errRes.msg + ', code ' + errRes.code;
        if (errRes.sub_msg) {
          msg += '; ' + errRes.sub_code + ': ' + errRes.sub_msg;
        }
        err = new Error(msg);
        err.name = 'TOPClientError';
        err.code = errRes.code;
        err.sub_code = errRes.sub_code;
        err.data = buffer.toString();
        // data = null;
      }
    }

    callback(err, data);
  });
}

function TopClient(key, secret, endpoint, options) {
  if (typeof endpoint === 'object' && !options) {
    options = endpoint
    endpoint = options.endpoint;
  }
  if (!options) options = {};
  if (!endpoint) endpoint = 'http://gw.api.taobao.com/router/rest';
  var useValidators = true, rawResponse = false;
  if (typeof options.useValidators === 'boolean') useValidators = options.useValidators;
  if (typeof options.rawResponse === 'boolean') rawResponse = options.rawResponse;
  this.execute = function(method, args, type, callback) {
    if (typeof type === 'function') {
      callback = type;
      type = null;
    }
    var proc = new Promise(function(f, r) {
      if (useValidators) require('./validator')(method, args);
      args = Object.assign({}, args, { method: method, app_key: key });
      request_api(endpoint, args, secret, type, function(err, data) {
        if (rawResponse) {
          f(data);
          return;
        }
        if (err) {
          return r(err);
        }
        var responseName = util.getApiResponseName(method), response = data[responseName];
        f(response);
      });
    }).then(function(response) {
      if (typeof callback === 'function') callback(null, response);
      return response;
    }).catch(function(e) {
      if (typeof callback === 'function') callback(e);
      throw e;
    });
    if (typeof callback !== 'function') return proc;
  }
}

module.exports = TopClient;
