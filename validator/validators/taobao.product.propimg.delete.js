'use strict'
module.exports = function(args, check) {
  check(args, "id", "Number", true);
  check(args, "product_id", "Number", true);
}
