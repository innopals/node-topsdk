'use strict'
module.exports = function(args, check) {
  check(args, "ext", "String", true);
  check(args, "image_name", "String", true);
  check(args, "imge", "byte[]", true);
}
