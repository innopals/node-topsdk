'use strict'
module.exports = function(args, check) {
  check(args, "audit_result", "Number", true);
  check(args, "product_line_list_agent", "String");
  check(args, "product_line_list_dealer", "String");
  check(args, "remark", "String", true);
  check(args, "requisition_id", "Number", true);
}
