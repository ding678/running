// pages/common/aboutme/amend/amend.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    var _this=this;
    var userPic = wx.getStorageSync('userpic');
    var userName = wx.getStorageSync('username');
    var sex = wx.getStorageSync('sex');
    var city = wx.getStorageSync('city');
    this.setData({
      userInfo: {
        userPic: userPic ? userPic : options.userPic,
        userName: userName ? userName : options.userName,
        sex: sex ? sex : options.sex,
        city: city ? city : options.city
      }
    }) 
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