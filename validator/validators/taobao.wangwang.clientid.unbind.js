'use strict'
module.exports = function(args, check) {
  check(args, "app_name", "String", true);
  check(args, "client_id", "String", true);
}
