'use strict'
module.exports = function(args, check) {
  check(args, "service_type", "Number");
  check(args, "taobao_trade_id", "Number");
}
