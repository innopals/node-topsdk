var expect = require('expect.js');
var TopClient = require('../index');
var config = require('../config'); // Use your own key to run tests.

describe("Testing taobao top sdk without session", function() {

  it("Get mixed nick", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, config.endpoint);
    client.execute('taobao.mixnick.get', { nick: 'test' }).then(function(data) {
      delete data.request_id;
      expect(data).to.eql({ nick: 't018lQ4oU0MmHtBJUkThIhBZQ==' });
      done();
    }).catch(done);
  });

  it("Get mixed nick using raw response", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, { endpoint: config.endpoint, rawResponse: true });
    client.execute('taobao.mixnick.get', { nick: 'test' }).then(function(data) {
      delete data.mixnick_get_response.request_id;
      expect(data).to.eql({ mixnick_get_response: { nick: 't018lQ4oU0MmHtBJUkThIhBZQ==' } });
      done();
    }).catch(done);
  });

});

describe("Testing taobao top sdk without session (HTTPS)", function() {

  it("Get mixed nick", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, config.endpoint_https);
    client.execute('taobao.mixnick.get', { nick: 'test' }).then(function(data) {
      delete data.request_id;
      expect(data).to.eql({ nick: 't018lQ4oU0MmHtBJUkThIhBZQ==' });
      done();
    }).catch(done);
  });

  it("Get mixed nick using raw response", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, { endpoint: config.endpoint_https, rawResponse: true });
    client.execute('taobao.mixnick.get', { nick: 'test' }).then(function(data) {
      delete data.mixnick_get_response.request_id;
      expect(data).to.eql({ mixnick_get_response: { nick: 't018lQ4oU0MmHtBJUkThIhBZQ==' } });
      done();
    }).catch(done);
  });

});

describe("Testing taobao top sdk error response", function() {

  it("Test parsing top error response.", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, { endpoint: config.endpoint_https, rawResponse: true, useValidators: false });
    client.execute('taobao.item.recommend.delete', { num_iid: 1234567890 }).then(function(data) {
      delete data.error_response.request_id;
      expect(data.error_response).to.eql({ code: 26, msg: 'Missing session' });
      done();
    }).catch(done);
  });

});