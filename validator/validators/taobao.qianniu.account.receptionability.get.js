'use strict'
module.exports = function(args, check) {
  check(args, "account_ids", "Number", true);
  check(args, "main_acount_id", "Number", true);
}
