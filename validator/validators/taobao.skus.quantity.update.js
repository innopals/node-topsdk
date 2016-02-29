'use strict'
module.exports = function(args, check) {
  check(args, "num_iid", "Number", true);
  check(args, "outerid_quantities", "String");
  check(args, "skuid_quantities", "String");
  check(args, "type", "Number");
}
