'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String", true);
  check(args, "num_iid", "Number");
}
