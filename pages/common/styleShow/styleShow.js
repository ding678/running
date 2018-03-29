const app = getApp();
var tool = require('../toolFun.js');
var api=require('../../../utils/api.js')

Page({
  data: {
    title:[{
      name: 'H4',
      attrs: {
        style: 'font-size:16px;margin-bottom:4px;color:#47b363;'
      },
      children:[{
        type: 'text',
        text: '我是标题'
      }]
    }],
    styleShowList: [],
    article:[]
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.topbarName
    })
    var _this = this;
    api.ajax('',function(respond){
      wx.request({
        url:'https://is.snssdk.com/api/news/feed/v51/',
        data:{       
          count:4
        },
        success:function(res){
          if (res.data.message=='success'){
            let article = res.data.data;
            let newslist=[];
            for (let i = 0; i < article.length;i++){           
              var news=JSON.parse(article[i].content)  //将字符串转为object
              var url = respond.styleshow[i].articleUrl
              newslist.push({
                title: news.abstract,
                name: news.user_info.name,
                readCount: news.read_count,
                commonentCount: news.comment_count,
                publishTime: tool.timeFormat(news.cursor),
                detailUrl: url
              })
            } 
            _this.setData({
              styleShowList: newslist
            })
          }else{
            alert('接口错误!')
          }           
        }
      })
    })
  },
  toalert: function () {
    wx.chooseImage({
      count:3,
      success:function(res){
        console.log(res)
      }
    })
  },
  // 转换时间戳
  getTime: function (timestick){
    var time = new Date(timestick);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year + '-' + this.toDouble(month) + '-' + this.toDouble(date) + ' ' + this.toDouble(hours) + ':' + this.toDouble(minutes) + ':' + this.toDouble(seconds);
  },
  toDouble:function (m){
    return m< 10 ? '0' + m : m 
  }
})



function timeFormat(timestick) {
  var time = new Date(timestick);
  var year = time.getFullYear();
  var month = time.getMonth() + 1;
  var date = time.getDate();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  return year + '-' + toDouble(month) + '-' + toDouble(date) + ' ' + toDouble(hours) + ':' + toDouble(minutes) + ':' +toDouble(seconds);
}
function toDouble(m) {
  return m < 10 ? '0' + m : m
}


