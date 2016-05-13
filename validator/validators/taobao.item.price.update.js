'use strict'
module.exports = function(args, check) {
  check(args, "after_sale_id", "Number");
  check(args, "approve_status", "String");
  check(args, "auction_point", "Number");
  check(args, "auto_fill", "String");
  check(args, "auto_repost", "Boolean");
  check(args, "cid", "Number");
  check(args, "cod_postage_id", "Number");
  check(args, "desc", "String");
  check(args, "ems_fee", "Price");
  check(args, "express_fee", "Price");
  check(args, "freight_payer", "String");
  check(args, "has_discount", "Boolean");
  check(args, "has_invoice", "Boolean");
  check(args, "has_showcase", "Boolean");
  check(args, "has_warranty", "Boolean");
  check(args, "ignorewarning", "String");
  check(args, "image", "byte[]");
  check(args, "increment", "Price");
  check(args, "input_pids", "String");
  check(args, "input_str", "String");
  check(args, "is_3D", "Boolean");
  check(args, "is_ex", "Boolean");
  check(args, "is_lightning_consignment", "Boolean");
  check(args, "is_replace_sku", "Boolean");
  check(args, "is_taobao", "Boolean");
  check(args, "is_xinpin", "Boolean");
  check(args, "lang", "String");
  check(args, "list_time", "Date");
  check(args, "location.city", "String");
  check(args, "location.state", "String");
  check(args, "num", "Number");
  check(args, "num_iid", "Number", true);
  check(args, "outer_id", "String");
  check(args, "pic_path", "String");
  check(args, "post_fee", "Price");
  check(args, "postage_id", "Number");
  check(args, "price", "Price");
  check(args, "product_id", "Number");
  check(args, "property_alias", "String");
  check(args, "props", "String");
  check(args, "sell_promise", "Boolean");
  check(args, "seller_cids", "String");
  check(args, "shape", "String");
  check(args, "sku_outer_ids", "String");
  check(args, "sku_prices", "String");
  check(args, "sku_properties", "String");
  check(args, "sku_quantities", "String");
  check(args, "stuff_status", "String");
  check(args, "sub_stock", "Number");
  check(args, "title", "String");
  check(args, "valid_thru", "Number");
  check(args, "weight", "Number");
}