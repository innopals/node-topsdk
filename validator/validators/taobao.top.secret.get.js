'use strict'
module.exports = function(args, check) {
  check(args, "random_num", "String", true);
  check(args, "secret_version", "Number");
}
