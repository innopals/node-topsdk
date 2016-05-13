'use strict'
module.exports = function(args, check) {
  check(args, "memo", "String");
  check(args, "meta_id", "Number", true);
}
