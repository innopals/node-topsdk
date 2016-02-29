'use strict'
module.exports = function(args, check) {
  check(args, "fields", "Field List");
  check(args, "nick", "String", true);
}
