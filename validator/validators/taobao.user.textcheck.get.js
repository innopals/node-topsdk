'use strict'
module.exports = function(args, check) {
  check(args, "app_id", "String", true);
  check(args, "content", "String", true);
}
