'use strict'
module.exports = function(args, check) {
  check(args, "creative_id", "Number", true);
  check(args, "nick", "String");
}
