'use strict'
module.exports = function(args, check) {
  check(args, "oid", "Number");
  check(args, "refund_id", "Number", true);
  check(args, "refund_phase", "String");
  check(args, "refund_version", "Number");
  check(args, "refuse_message", "String", true);
  check(args, "refuse_proof", "byte[]");
  check(args, "refuse_reason_id", "Number");
  check(args, "tid", "Number");
}
