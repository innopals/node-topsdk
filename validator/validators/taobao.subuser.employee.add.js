'use strict'
module.exports = function(args, check) {
  check(args, "department_id", "Number", true);
  check(args, "duty_id", "Number");
  check(args, "employee_name", "String", true);
  check(args, "employee_nickname", "String");
  check(args, "employee_num", "String");
  check(args, "entry_date", "Date");
  check(args, "id_card_num", "String");
  check(args, "leader_id", "Number");
  check(args, "office_phone", "String");
  check(args, "personal_email", "String");
  check(args, "personal_mobile", "String");
  check(args, "sex", "Number", true);
  check(args, "sub_id", "Number", true);
  check(args, "work_location", "String");
}
