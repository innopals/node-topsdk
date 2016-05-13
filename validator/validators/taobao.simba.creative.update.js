'use strict'
module.exports = function(args, check) {
  check(args, "adgroup_id", "Number", true);
  check(args, "creative_id", "Number", true);
  check(args, "img_url", "String", true);
  check(args, "nick", "String");
  check(args, "title", "String", true);
}
