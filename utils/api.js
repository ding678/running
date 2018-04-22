var Mock=require('mock.js')
var hasApi=false;
var apiHost='https://running.com'
// var event=require('event.js')
function ajax(data = '', fn, method = "get", header = { "Content-Type": "application/json"}){
  if (hasApi){
      wx.request({
        url: apiHost+data,
        method: method
      })
  }else{
    var res = Mock.mock({
        "styleshow|3-20": [{
          "number|1-100": 100,
          "numberComment|1-50":50,
          "title": "@ctitle(4,8)",
          "intro": "@csentence(5)",
          "article": "@cparagraph(20,50)",
          "updataTime": "@datetime()",
          "name":"@cword(2,6)",
          "articleUrl":"@url()",
          "picthumb":"@Image('90x124')",
          "readCount|1-100":100,
          "publishTime":"@datetime()"
        }]
    });
    fn(res);    
  }
}


module.exports={
  ajax:ajax
}