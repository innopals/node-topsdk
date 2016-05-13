var expect = require('expect.js');
var TopClient = require('../index');
var config = require('../config'); // Use your own key to run tests.
var client = new TopClient(config.app_key, config.app_secret, config.endpoint);
var session = process.env.TOPSDK_TEST_SESSION;
var fs = require('fs'), path = require('path');
var picIds = [];

describe("Testing taobao top sdk upload file with session", function() {

  it("Upload using buffer", function(done) {
    if (!session) {
      expect(!!session).to.eql(true);
      done();
    }
    var buffer = fs.readFileSync(path.join(__dirname, 'ok.png'));
    client.execute('taobao.picture.upload', {
      session: session,
      picture_category_id: 0,
      img: {
        value: buffer,
        options: {
          filename: 'ok.png'
        }
      },
      image_input_title: 'ok.png',
      title: 'node sdk testing image.'
    }, 'FILE_UPLOAD').then(function(data) {
      picIds.push(data.picture.picture_id);
      done();
    }).catch(done);
  });

  it("Upload using stream", function(done) {
    if (!session) {
      expect(!!session).to.eql(true);
      done();
    }
    client.execute('taobao.picture.upload', {
      session: session,
      picture_category_id: 0,
      img: fs.createReadStream(path.join(__dirname, 'ok.png')),
      image_input_title: 'ok.png',
      title: 'node sdk testing image.'
    }, 'FILE_UPLOAD').then(function(data) {
      picIds.push(data.picture.picture_id);
      done();
    }).catch(done);
  });

  after(function(done) {
    if (picIds.length === 0) {
      done();
      return;
    }
    if (!session) {
      expect(!!session).to.eql(true);
      done();
    }
    console.log('Cleaning up...');
    Promise.resolve().then(() => {
      console.log("Deleting picture(s). ", picIds);
      return client.execute('taobao.picture.delete', {
        session: session,
        picture_ids: picIds.join(',')
      });
    }).catch(e => {
      console.warn("Warning: fail to delete picture(s).");
    }).then(() => done());
  });

});
