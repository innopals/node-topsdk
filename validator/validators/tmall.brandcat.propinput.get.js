'use strict'
module.exports = function(args, check) {
  check(args, "brand_id", "Number", true);
  check(args, "cid", "Number", true);
  check(args, "pid", "Number", true);
}
