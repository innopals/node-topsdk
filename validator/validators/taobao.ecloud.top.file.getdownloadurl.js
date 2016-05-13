'use strict'
module.exports = function(args, check) {
  check(args, "client_id", "String", true);
  check(args, "file_ids", "String", true);
  check(args, "package_name", "String");
  check(args, "site", "Number");
  check(args, "space_id", "Number", true);
}
