'use strict'
module.exports = function(args, check) {
  check(args, "question_desc", "String", true);
  check(args, "question_title", "String", true);
  check(args, "solution", "String", true);
}
