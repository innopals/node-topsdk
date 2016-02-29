'use strict'
module.exports = function(args, check) {
  check(args, "biz_code", "String");
  check(args, "content", "String", true);
  check(args, "style", "QrCodeStyle");
}
