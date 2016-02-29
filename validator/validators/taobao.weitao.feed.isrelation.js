'use strict'
module.exports = function(args, check) {
  check(args, "fans_nick", "String", true);
  check(args, "seller_nick", "String", true);
}
