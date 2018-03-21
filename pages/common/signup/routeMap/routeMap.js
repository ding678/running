// pages/common/signup/routeMap/routeMap.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    polyline: [{
      points: [{ longitude: 116.402359, latitude: 39.999763 }, { longitude: 116.402122, latitude: 39.929583 }, { longitude: 116.396832, latitude: 39.999271 }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    routeDetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.route1)
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