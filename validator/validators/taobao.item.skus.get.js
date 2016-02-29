'use strict'
module.exports = function(args, check) {
  check(args, "fields", "Field List", true);
  check(args, "num_iids", "String", true);
}
