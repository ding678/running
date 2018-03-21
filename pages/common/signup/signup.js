// pages/common/signup/signup.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
      signlist:[
        { runname: '周末活动', start: '2017-02-01', end: '2017-03-01', notice: '量力而行', route: '鸟巢-故宫-水立方', gps: [{ longitude: 116.402359, latitude: 39.999763 }, { longitude: 116.402122, latitude: 39.929583 }, { longitude: 116.396832, latitude: 39.999271 }]},
        { runname: '春季越野', start: '2018-02-01', end: '2018-03-01', notice: '量力而行', route: '北京大学-中国人民大学-中国政法大学-清华大学',gps: [{ longitude: 116.303227, latitude: 40.01978 }, { longitude: 116.303227, latitude: 40.01978 }, { longitude: 116.303227, latitude: 40.01978 }, { longitude: 116.333134, latitude: 40.009545 }] }
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