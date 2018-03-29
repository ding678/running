// pages/common/signup/signup.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      signlist:[
        { runname: '周末活动', start: '2017-02-01', end: '2017-03-01', notice: '量力而行',route:'route1' },
        { runname: '春季越野', start: '2018-02-01', end: '2018-03-01', notice: '量力而行', route: 'route2' }
      ]
  }, 
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        this.setData({
          src: res.tempImagePath
        })
      }
    })
  },
  error(e) {
    console.log(e.detail)
  },
  onload:function(){
    
  }
})