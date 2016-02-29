'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String", true);
  check(args, "tag_id", "Number", true);
}
