'use strict'
module.exports = function(args, check) {
  check(args, "article_code", "String", true);
  check(args, "nick", "String", true);
}
