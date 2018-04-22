// pages/common/classroom/classVideo/classVideo.js
Page({
  onReady: function () {
    this.videoContext = wx.createVideoContext('myVideo');
  },
  /**
   * 页面的初始数据
   */
  data: {
    videoList: 
      { videoSrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", playnum: 5, playName: "张三三", playTip: "跑步需要注意什么呢？仔细看", date: '2018-03-02' },
      hideNum:false,
      danmuList: [{
        text: '弹幕1',
        color: '#ff0000',
        time: 1
      },
      {
        text: '弹幕2浩',
        color: '#ff00ff',
        time: 3
      }]
  },
  countNum:function(){
    this.setData({
      hideNum:true
    })
  },
  bindpause:function(){
    this.setData({
      hideNum: false
    })
  },
  getNum:function(){
    var newNum =++this.data.videoList.playnum;
    this.setData({
      hideNum: false,
      videoList: { videoSrc: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400", playnum: newNum , playName: "张三三", playTip: "跑步需要注意什么呢？仔细看", date: '2018-03-02' }
    })
  },
  values:'',
  getValue: function (e) {
    this.values = e.detail.value
  },
  sendDanmu:function(e){
    this.videoContext.sendDanmu({
      text:this.values,
      color:'#ee00ee'
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */


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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})