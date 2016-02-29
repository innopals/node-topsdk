'use strict'
module.exports = function(args, check) {
  check(args, "image_data", "byte[]", true);
  check(args, "picture_id", "Number", true);
}
