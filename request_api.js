var request = require('request');
var JSON = require('json-bigint')({ "storeAsString": true });
var Stream = require('stream');
var util = require('./util');
var http = require('http');
var https = require('https');
var httpAgent = new http.Agent({ keepAlive: true, keepAliveMsecs: 5000 });
var httpsAgent = new https.Agent({ keepAlive: true, keepAliveMsecs: 5000 });

var REQUEST_TYPES = {
  "get": "GET",
  "post": "POST",
  "file_upload": "FILE_UPLOAD"
};

module.exports = function request_api(endpoint, args, secret, type, callback) {
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

  Object.keys(args).forEach(function (key) {
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

  args.sign = util.sign(secret, args2sign);

  var options = {
    url: endpoint,
    method: type != 'GET' ? 'POST' : 'GET',
    [type === 'FILE_UPLOAD' ? "formData" : "form"]: args,
    agent: endpoint.startsWith('https:') ? httpsAgent : httpAgent
  };

  var piped = false;
  // support piping.
  setTimeout(function () {
    if (piped) return;
    request(options, function (err, response, buffer) {
      var data;
      if (buffer) {
        buffer = util.wrapJSON(buffer.toString());
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
  });

  var result_stream = null;
  return {
    pipe: function (stream) {
      piped = true;
      if (!result_stream) result_stream = request(options);
      return result_stream.pipe(stream);
    }
  }
}
