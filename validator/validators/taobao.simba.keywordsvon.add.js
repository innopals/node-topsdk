'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number", true);
  check(args, "keyword_prices", "String", true);
  check(args, "nick", "String");
}
