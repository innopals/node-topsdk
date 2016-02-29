'use strict'
module.exports = function(args, check) {
  check(args, "src_appkey", "String", true);
  check(args, "src_mix_nick", "String", true);
}
