'use strict'
module.exports = function(args, check) {
  check(args, "fields", "Field List");
  check(args, "sub_id", "Number");
  check(args, "sub_nick", "String");
}
