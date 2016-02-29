'use strict'
module.exports = function(args, check) {
  check(args, "fields", "String", true);
  check(args, "nick", "String");
  check(args, "top_mix_params", "String");
}
