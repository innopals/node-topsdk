'use strict'
module.exports = function(args, check) {
  check(args, "promotion_desc", "String", true);
  check(args, "promotion_title", "String", true);
}
