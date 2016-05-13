'use strict'
module.exports = function(args, check) {
  check(args, "creative_ids", "Number", true);
  check(args, "nick", "String");
}
