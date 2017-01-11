var expect = require('expect.js');
var TopClient = require('../index');
var config = require('../config'); // Use your own key to run tests.

// writable memory stream.
var stream = require('stream');
var util = require('util');
// use Node.js Writable, otherwise load polyfill
var Writable = stream.Writable ||
  require('readable-stream').Writable;

var memStore = { };

/* Writable memory stream */
function WMStrm(key, options) {
  // allow use without new operator
  if (!(this instanceof WMStrm)) {
    return new WMStrm(key, options);
  }
  Writable.call(this, options); // init super
  this.key = key; // save key
  memStore[key] = new Buffer(''); // empty
}
util.inherits(WMStrm, Writable);

WMStrm.prototype._write = function (chunk, enc, cb) {
  // our memory store stores things in buffers
  var buffer = (Buffer.isBuffer(chunk)) ?
    chunk :  // already is Buffer use it
    new Buffer(chunk, enc);  // string, convert

  // concat to the buffer already there
  memStore[this.key] = Buffer.concat([memStore[this.key], buffer]);
  cb();
};

describe("Testing stream pipeline.", function() {

  it("Get mixed nick using stream pipeline", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, config.endpoint);
    var wstream = new WMStrm('foo');
    wstream.on('finish', function() {
      expect(JSON.parse(memStore.foo.toString()).mixnick_get_response.nick).to.equal('t018lQ4oU0MmHtBJUkThIhBZQ==');
      done();
    });
    client.execute('taobao.mixnick.get', { nick: 'test' }).pipe(wstream);
  });

});