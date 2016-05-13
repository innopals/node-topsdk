'use strict'
module.exports = function(args, check) {
  check(args, "end_modified", "Date");
  check(args, "fields", "Field List");
  check(args, "is_authz", "String");
  check(args, "item_ids", "Number");
  check(args, "outer_id", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "pids", "Number");
  check(args, "productcat_id", "Number");
  check(args, "sku_number", "String");
  check(args, "start_modified", "Date");
  check(args, "status", "String");
}
