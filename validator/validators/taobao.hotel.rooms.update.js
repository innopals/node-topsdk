'use strict'
module.exports = function(args, check) {
  check(args, "gid_room_quota_map", "String");
  check(args, "multi_room_quotas", "String");
}
