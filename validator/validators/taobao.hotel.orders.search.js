'use strict'
module.exports = function(args, check) {
  check(args, "checkin_date_end", "Date");
  check(args, "checkin_date_start", "Date");
  check(args, "checkout_date_end", "Date");
  check(args, "checkout_date_start", "Date");
  check(args, "created_end", "Date");
  check(args, "created_start", "Date");
  check(args, "gids", "String");
  check(args, "hids", "String");
  check(args, "need_guest", "Boolean");
  check(args, "need_message", "Boolean");
  check(args, "oids", "String");
  check(args, "page_no", "Number");
  check(args, "rids", "String");
  check(args, "status", "String");
  check(args, "tids", "String");
}
