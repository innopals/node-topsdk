'use strict'
module.exports = function(args, check) {
  check(args, "new_name", "String", true);
  check(args, "picture_id", "Number", true);
}
