'use strict'
module.exports = function(args, check) {
  check(args, "assumer", "Number");
  check(args, "name", "String");
  check(args, "template_add_fees", "String", true);
  check(args, "template_add_standards", "String", true);
  check(args, "template_dests", "String", true);
  check(args, "template_id", "Number", true);
  check(args, "template_start_fees", "String", true);
  check(args, "template_start_standards", "String", true);
  check(args, "template_types", "String", true);
}
