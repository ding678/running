// pages/common/event/event.js
 const app=getApp();
 const tool = require('../toolFun.js');
 const api=require('../../../utils/api.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    eventList:[],
    min_time:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this;
    let eventURL=app.globalData.styleShow
    wx.request({
      url: 'https://is.snssdk.com/api/news/feed/v51/',
      data:{
        count:10
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success:function(res){
        let article = res.data.data;
        let newslist = [];
        for (let i = 0; i < article.length; i++) {
          var news = JSON.parse(article[i].content)  //将字符串转为object        
          var picSrc = news.middle_image ? news.middle_image.url : '../../images/heart.jpg';
          newslist.push({
            title: news.abstract,
            name: news.user_info.name,
            readCount: news.read_count,
            commonentCount: news.comment_count,
            publishTime: tool.timeEvent(news.cursor),
            detailUrl: news.share_url,
            picthumb: picSrc
          }) 
        }
        _this.setData({
          eventList: newslist,
          min_time:new Date().getTime()
        });
      }
    })
  },
  getTime: function (timestick) {
    var time = new Date(timestick);
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    return year + '-' + this.toDouble(month) + '-' + this.toDouble(date) + ' ' + this.toDouble(hours) + ':' + this.toDouble(minutes) + ':' + this.toDouble(seconds);
  },
  toDouble: function (m) {
    return m < 10 ? '0' + m : m
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading(); //标题loading
    wx.showLoading();
    var _this=this;     
    wx.request({
      url: 'https://is.snssdk.com/api/news/feed/v51/',
      data: {
        min_behot_time: _this.data.min_time,
        last_refresh_sub_entrance_interval: new Date().getTime()
      },
      success: function (res) {
        let article = res.data.data;
        let newslist = [];
        for (let i = 0; i < article.length; i++) {
          var news = JSON.parse(article[i].content)  //将字符串转为object        
          var picSrc = news.middle_image ? news.middle_image.url : '../../images/heart.jpg';
          newslist.push({
            title: news.abstract,
            name: news.user_info.name,
            readCount: news.read_count,
            commonentCount: news.comment_count,
            publishTime: tool.timeEvent(news.cursor),
            detailUrl: news.share_url,
            picthumb: picSrc
          }) 
        }
        _this.setData({
          eventList: newslist,
          min_time:new Date().getTime()
        });
        wx.hideNavigationBarLoading() 
        wx.hideLoading();
        wx.stopPullDownRefresh();
      }
    })
      
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var _this=this;
    api.ajax('event/list',function(res){
      console.log(res)
      var newList = _this.data.eventList.concat(res.styleshow);//将新请求的数据与旧数据拼接
      _this.setData({
        eventList: newList
      })
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})