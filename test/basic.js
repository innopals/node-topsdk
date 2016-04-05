var expect = require('expect.js');
var TopClient = require('../index');
var config = require('../config'); // Use your own key to run tests.

describe("Testing taobao top sdk without session", function() {

  it("Get mixed nick", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, config.endpoint);
    client.execute('taobao.mixnick.get', { nick: '宝贝yao不哭' }).then(function(data) {
      expect(data).to.eql({ nick: '宝014VrF9f8lGrrBcex/2bNt5/aqsKBo6N4mVrsShOs6o9E=' });
      done();
    }).catch(done);
  });

  it("Get mixed nick using raw response", function(done) {
    var client = new TopClient(config.app_key, config.app_secret, { endpoint: config.endpoint, rawResponse: true });
    client.execute('taobao.mixnick.get', { nick: '宝贝yao不哭' }).then(function(data) {
      expect(data).to.eql({ mixnick_get_response: { nick: '宝014VrF9f8lGrrBcex/2bNt5/aqsKBo6N4mVrsShOs6o9E=' } });
      done();
    }).catch(done);
  });

});
