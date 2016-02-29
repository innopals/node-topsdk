'use strict'
module.exports = function(args, check) {
  check(args, "id", "Number", true);
  check(args, "num_iid", "Number", true);
}
