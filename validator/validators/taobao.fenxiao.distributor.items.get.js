'use strict'
module.exports = function(args, check) {
  check(args, "distributor_id", "Number");
  check(args, "end_modified", "Date");
  check(args, "page_no", "Number");
  check(args, "page_size", "Number");
  check(args, "product_id", "Number");
  check(args, "start_modified", "Date");
}
