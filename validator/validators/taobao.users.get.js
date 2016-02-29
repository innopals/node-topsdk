'use strict'
module.exports = function(args, check) {
  check(args, "fields", "Field List", true);
  check(args, "nicks", "String", true);
}
