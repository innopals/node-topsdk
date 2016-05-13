'use strict'
module.exports = function(args, check) {
  check(args, "batch_code", "String");
  check(args, "channel_code", "String");
  check(args, "due_date", "Date");
  check(args, "inventory_type", "Number");
  check(args, "item_id", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "produce_date", "Date");
  check(args, "store_code", "String");
  check(args, "type", "Number");
}
