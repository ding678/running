// pages/common/aboutme/amend/changepic.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pic_src:'',
    user_btn:true
  },
  // 点击图片可更换头像
  changepic: function () {
    let _this=this;
    wx.showActionSheet({
      itemList: ['从手机相册选择', '拍照'],
      success: function (res) {
        switch (res.tapIndex) {
          case 0:
            wx.chooseImage({
              count:1,
              sizeType: ['original', 'compressed'],
              sourceType: ['album'],
              success:function(res){
                var new_pic_src=res.tempFilePaths[0];
                _this.setData({
                  pic_src: new_pic_src,
                  user_btn:false
                }); 
                wx.setStorage({
                  key: "userpic",
                  data: new_pic_src
                })
              }
            })
            break;
          case 1:
            wx.chooseImage({
              count:1,
              sourceType: ['camera'],
              sizeType: ['compressed'],
              success:function(res){
                var new_pic_src = res.tempFilePaths[0];
                _this.setData({
                  pic_src: new_pic_src,
                  user_btn: false
                });
                wx.setStorage({
                  key: "userpic",
                  data: new_pic_src
                })
              }
            }) 
          break;
          default:
            console.log('出错了!')
        }


      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  returnUserInfo:function(){
    var picSrc=this.data.pic_src;
    wx.redirectTo({
      url: "amend?pic=" + picSrc
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     this.setData({
       pic_src: options.picSrc
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