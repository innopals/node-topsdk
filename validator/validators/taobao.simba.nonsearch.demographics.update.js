'use strict'
module.exports = function(args, check) {
  check(args, "campaign_id", "Number", true);
  check(args, "demographic_id_price_json", "String", true);
  check(args, "nick", "String");
}
