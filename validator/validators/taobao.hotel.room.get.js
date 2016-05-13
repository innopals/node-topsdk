'use strict'
module.exports = function(args, check) {
  check(args, "gid", "Number");
  check(args, "item_id", "Number");
  check(args, "need_hotel", "Boolean");
  check(args, "need_room_desc", "Boolean");
  check(args, "need_room_quotas", "Boolean");
  check(args, "need_room_type", "Boolean");
  check(args, "outer_id", "String");
  check(args, "rid", "Number");
}
