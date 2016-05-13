'use strict'
module.exports = function(args, check) {
  check(args, "nick", "String");
  check(args, "the_date", "String", true);
}
