'use strict'
module.exports = function(args, check) {
  check(args, "client_id", "String", true);
  check(args, "file_type", "Number");
  check(args, "key_name", "String", true);
  check(args, "length", "Number");
  check(args, "offset", "Number");
  check(args, "site", "Number");
  check(args, "sort_type", "Number");
}
