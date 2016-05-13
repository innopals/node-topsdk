'use strict'
module.exports = function(args, check) {
  check(args, "ins_receiver_to", "JzReceiverTo");
  check(args, "ins_tp_dto", "Tpdto");
  check(args, "jz_receiver_to", "JzReceiverTo");
  check(args, "jz_top_args", "JzTopArgs");
  check(args, "lg_tp_dto", "Tpdto", true);
  check(args, "sender_id", "Number");
  check(args, "tid", "Number", true);
}
