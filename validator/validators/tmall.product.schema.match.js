'use strict'
module.exports = function(args, check) {
  check(args, "category_id", "Number", true);
  check(args, "propvalues", "String", true);
}
