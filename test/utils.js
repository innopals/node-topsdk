var expect = require('expect.js');
var util = require('../util');

describe("Testing taobao top sdk utils", function() {

  it("md5", function() {
    expect(util.md5("test")).to.eql('098f6bcd4621d373cade4e832627b4f6');
  });

  it('sign', function() {
    expect(util.sign("sandbox01eff1e5ac77cf3d078982e6e", { a: 1, b: 2, c: "✔️"})).to.eql('3250EADEB3D5F9B453F4F0B95FA4B160');
  });

});
