// pages/common/about/aboutme.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    amend:"amend/amend",
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    wx.authorize({
      scope: 'scope.userInfo',
      success: function () {
        wx.getUserInfo({
          success: function (res) {
            var userInfoList = res.userInfo;
            // wx.getStorage({
            //   key:'user',
            //   success:function(res){
            //     userName=res.data.userName;
            //     userPic = res.data.userPic;
            //   },
            //   fail:function(res){
            //     userName = userInfoList.nickName;
            //     userPic = userInfoList.avatarUrl;
            //   }
            // })  //异步在此刻不适用
            // wx.removeStorage('user');
            var userPic = wx.getStorageSync('userpic');
            var userName = wx.getStorageSync('username');
            var sex = wx.getStorageSync('sex');
            var city = wx.getStorageSync('city');
            console.log(userName,)
            _this.setData({
              userInfo: {
                userPic: userPic ? userPic : userInfoList.avatarUrl,
                userName: userName ? userName : userInfoList.nickName,
                sex: sex ? sex : _this.checkSex(userInfoList.gender),
                city: city ? city : '北京'
              }
            })                      
          }
        })
      }
    })
  },
  checkSex:function(gender){
    var sex=''
    switch (gender) {
      case 1:
        sex = "男";
        break;
      case 2:
        sex = "女";
        break;
      default:
        sex = "未知"
        break;
    }
    return sex;
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