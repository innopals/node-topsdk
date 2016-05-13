'use strict'
module.exports = function(args, check) {
  check(args, "keyword_ids", "Number", true);
  check(args, "nick", "String");
}
