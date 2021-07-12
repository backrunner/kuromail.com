//cookie
/*
  setCookie(name,value,day)
  name - cookie名称
  value - cookie值
  day - 有效期（天）
*/
function setCookie(name, value, day) {
  var Days = day;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
}

function setCookie_raw(name, value, day) {
  var Days = day;
  var exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  document.cookie = name + "=" + value + ";expires=" + exp.toGMTString() + ";path=/";
}

/*
  getCookie(cname)
  cname - cookie名称
  返回字符串
*/
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return null;
}