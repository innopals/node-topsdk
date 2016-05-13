'use strict'
module.exports = function(args, check) {
  check(args, "keyword_ids", "Number");
  check(args, "nick", "String");
}
