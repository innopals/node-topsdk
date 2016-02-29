'use strict'
module.exports = function(args, check) {
  check(args, "biz_id", "String", true);
  check(args, "content", "String", true);
  check(args, "feed_id", "Number", true);
}
