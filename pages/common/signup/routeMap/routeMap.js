// pages/common/signup/routeMap/routeMap.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */

  data: {
    polyline: [{
      points: [{ longitude: 116.402359, latitude: 39.999763 }, { longitude: 116.402122, latitude: 39.929583 }, { longitude: 116.396832, latitude: 39.999271 }],
      // points: this.data.routeDetail.gps,
      color: "#FF0000DD",
      width: 2,
      dottedLine: false     
    }],
    routeDetail: { runname: '春季越野', start: '2018-02-01', end: '2018-03-01', notice: '量力而行', route: '北京大学-中国人民大学-中国政法大学-清华大学', gps: [{ longitude: 116.303227, latitude: 40.01978 }, { longitude: 116.303227, latitude: 40.01978 }, { longitude: 116.303227, latitude: 40.01978 }, { longitude: 116.333134, latitude: 40.009545 }] },
    defaultHide:true,
    name:true,
    tel:true,
    typeBtn: { type: 'primary',btnName:'报名'},
    zShow:false
  },
  showSign:function(){
    if (this.data.defaultHide){
        this.setData({
          defaultHide:false,
          zShow:true
        })
    }
  },
  cancelSign:function(){
    this.setData({
      defaultHide: true,
      zShow: false
    })
  },
  nameTest:function(event){      
    const name = app.globalData.regxp.name  
    if (!name.test(event.detail.value)){
      this.setData({
        name: false
      })
    }else{
      this.setData({
        name: true
      })
    }
  },
  telTest:function(event){
    const tel = app.globalData.regxp.tel 
    if (!tel.test(event.detail.value)){
      this.setData({
        tel: false
      })
    }else{
      this.setData({
        tel: true
      })
    }
  },
  submitData:function(e){  
    const val=e.detail.value; 
    const name = app.globalData.regxp.name
    const tel = app.globalData.regxp.tel 
    const _this=this;
    if (name.test(val.name) && tel.test(val.tel)){
      wx.showToast({
        title:'报名成功',
        success:function(){
          _this.setData({
            defaultHide: true,
            typeBtn:{
              type:'default',
              btnName:'已报名'
            }
          })

        }
      })
    }else{
      wx.showModal({
        content:'请填写正确的姓名和电话',
        showCancel:false
      }) 
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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