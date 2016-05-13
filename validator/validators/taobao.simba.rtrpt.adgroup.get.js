'use strict'
module.exports = function(args, check) {
  check(args, "campaign_id", "Number", true);
  check(args, "nick", "String");
  check(args, "page_number", "Number");
  check(args, "page_size", "Number");
  check(args, "the_date", "String", true);
}
