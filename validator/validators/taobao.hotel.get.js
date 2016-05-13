'use strict'
module.exports = function(args, check) {
  check(args, "check_audit", "Boolean");
  check(args, "hid", "Number", true);
  check(args, "need_room_type", "Boolean");
}
