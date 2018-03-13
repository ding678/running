function tocode(str) {
  return encodeURIComponent(str);
}
function timeFormat(timestick) {
  var time = new Date(timestick);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  return year + '-' + toDouble(month) + '-' + toDouble(date) + ' ' + toDouble(hours) + ':' + toDouble(minutes) + ':' + toDouble(seconds);
}
function toDouble(m) {
  return m < 10 ? '0' + m : m
}
function timeEvent(timestick){
  var time = new Date(timestick);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var day=time.getDay();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  return year + '-' + toDouble(month) + '-' + toDouble(date) + ' 星期' + week(day)+' '+ toDouble(hours) + ':' + toDouble(minutes);
}
function week(days){
  switch (days){
    case  1:
      return "一"
      break;
    case 2:
      return "二"
      break;
    case 3:
      return "三"
      break;
    case 4:
      return "四"
      break;
    case 5:
      return "五"
      break;
    case 6:
      return "六"
      break;
    case 0:
      return "日"
      break;
  }
}
export { tocode, timeFormat,timeEvent}