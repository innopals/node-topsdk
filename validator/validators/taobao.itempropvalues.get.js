'use strict'
module.exports = function(args, check) {
  check(args, "attr_keys", "String");
  check(args, "cid", "Number", true);
  check(args, "datetime", "Date");
  check(args, "fields", "String", true);
  check(args, "pvs", "String");
  check(args, "type", "Number");
}
