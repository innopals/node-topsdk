'use strict'
module.exports = function(args, check) {
  check(args, "download_status", "String");
  check(args, "end_time", "Date");
  check(args, "fields", "Field List");
  check(args, "item_ids", "Number");
  check(args, "order_by", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "pids", "Number");
  check(args, "productcat_id", "Number");
  check(args, "start_time", "Date");
  check(args, "supplier_nick", "String");
  check(args, "time_type", "String");
  check(args, "trade_type", "String");
}
