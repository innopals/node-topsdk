'use strict'
module.exports = function(args, check) {
  check(args, "group_name", "String");
  check(args, "quantity", "Number");
}
