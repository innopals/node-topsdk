'use strict'
module.exports = function(args, check) {
  check(args, "hid", "Number", true);
  check(args, "name", "String", true);
  check(args, "outer_id", "String");
  check(args, "site_param", "String");
}
