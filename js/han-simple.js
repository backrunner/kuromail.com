function insert_spacing(str, space) {
  var p1 = /([A-Za-z_])([\u4e00-\u9fa5]+)/gi;
  var p2 = /([\u4e00-\u9fa5]+)([A-Za-z_])/gi;
  var p3 = /([0-9_])([\u4e00-\u9fa5]+)/gi;
  var p4 = /([\u4e00-\u9fa5]+)([0-9_])/gi;
  var p5 = /([A-Za-z_])([`~!@#$%^&*()_\-+=?:"{}|,.\/;'\\[\]·~！@#￥%&*——\-+={}‘’])([\u4e00-\u9fa5]+)/gi;
  var p6 = /([\u4e00-\u9fa5]+)([`~!@#$%^&*()_\-+=?:"{}|,.\/;'\\[\]·~！@#￥%&*——\-+={}‘’])([A-Za-z_])/gi;
  var p7 = /([\u4e00-\u9fa5]+)([<])([a])/gi;
  var p8 = /([a])([>])([\u4e00-\u9fa5]+)/gi;
  var quotation1 = /(“)/gi
  var quotation2 = /(”)/gi
  str = str.replace(p1, '$1あおえ$2').replace(p2, "$1あおえ$2").replace(p3, "$1あおえ$2").replace(p4, "$1あおえ$2").replace(p5, "$1$2あおえ$3").replace(p6, "$1あおえ$2$3").replace(p7, "$1あおえ$2$3").replace(p8, "$1$2あおえ$3");
  str = str.replace(quotation1, '「').replace(quotation2, '」');
  var p = /([あ])([お])([え])/gi;
  str = str.replace(p, '<han style="padding-left:' + space + 'em !important;padding-right:' + space + 'em !important"></han>');
  return str;
}
