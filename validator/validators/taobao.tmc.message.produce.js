'use strict'
module.exports = function(args, check) {
  check(args, "content", "String", true);
  check(args, "ex_content", "String");
  check(args, "media_content", "byte[]");
  check(args, "media_content2", "byte[]");
  check(args, "media_content3", "byte[]");
  check(args, "media_content4", "byte[]");
  check(args, "media_content5", "byte[]");
  check(args, "target_appkey", "String");
  check(args, "topic", "String", true);
}
