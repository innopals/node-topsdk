'use strict'
module.exports = function(args, check) {
  check(args, "keywordid_prices", "String", true);
  check(args, "nick", "String");
}
