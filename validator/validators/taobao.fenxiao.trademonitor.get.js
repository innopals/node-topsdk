'use strict'
module.exports = function(args, check) {
  check(args, "distributor_nick", "String");
  check(args, "end_created", "Date");
  check(args, "fields", "String");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "product_id", "Number");
  check(args, "start_created", "Date");
}
