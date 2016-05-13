'use strict'
module.exports = function(args, check) {
  check(args, "ins_partner", "JzPartnerNew");
  check(args, "jz_consign_args", "JzConsignArgsNew", true);
  check(args, "tid", "Number", true);
  check(args, "tms_partner", "JzPartnerNew", true);
}
