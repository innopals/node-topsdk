'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String");
  check(args, "sub_id", "Number");
  check(args, "sub_nick", "String");
}
