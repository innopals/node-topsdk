'use strict'
module.exports = function(args, check) {
  check(args, "client_id", "String", true);
  check(args, "file_id", "Number", true);
  check(args, "site", "Number");
  check(args, "space_id", "Number", true);
}
