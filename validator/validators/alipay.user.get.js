'use strict'
module.exports = function(args, check) {
  check(args, "auth_token", "String");
  check(args, "fields", "Field List");
}
