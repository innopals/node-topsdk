'use strict'
module.exports = function(args, check) {
  check(args, "channel_name", "String");
  check(args, "content", "String", true);
  check(args, "logo", "String");
  check(args, "name", "String", true);
  check(args, "need_eps", "Boolean");
  check(args, "size", "Number", true);
  check(args, "style", "String", true);
  check(args, "type", "String", true);
}
