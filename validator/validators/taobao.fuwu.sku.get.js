'use strict'
module.exports = function(args, check) {
  check(args, "appKey", "String", true);
  check(args, "article_code", "String", true);
  check(args, "nick", "String", true);
}
