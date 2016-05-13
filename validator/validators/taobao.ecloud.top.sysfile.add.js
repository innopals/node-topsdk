'use strict'
module.exports = function(args, check) {
  check(args, "client_id", "String", true);
  check(args, "file_infos", "String", true);
  check(args, "key_name", "String", true);
  check(args, "overwrite", "Boolean");
  check(args, "site", "Number");
}
