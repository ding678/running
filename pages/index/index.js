//index.js
//获取应用实例
const app = getApp()
// const font=require('../general/fontIcon.js')

Page({
  data: {
    motto: 'Hello World,my first 小程序',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    allBlock:[
      { name: '风采展示', pic: '../images/pic.jpg', pages: '../common/styleShow/styleShow', iconname:'fengcai1'},
      { name: '经验交流', pic: '../images/pic.jpg', pages: '../common/experience/experience', iconname: 'ketang'},
      { name: '跑步课堂', pic: '../images/pic.jpg', pages: '../common/classroom/classroom', iconname: 'yundong'},
      { name: '户外俱乐部', pic: '../images/pic.jpg', pages: '', iconname:'huwaixiuxi' },
      { name: '网站公告', pic: '../images/pic.jpg', pages: '../common/webNotice/webNotice', iconname: 'gonggao1'},
      { name: '活动报名', pic: '../images/pic.jpg', pages: '../common/signup/signup', iconname: 'bhjbaoming'}
    ],
    banner:[
      {img:'../images/heart.jpg'},
      { img: '../images/usebg.jpg' },
      { img: '../images/pic.jpg' },
    ],
    dots:true,
    autoPlay:true
  },
  onLoad:function(){
    
  }
 
})
