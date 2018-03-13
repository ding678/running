// pages/common/component/editor.js
var wxParse=require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onLoad: function (options){
    var article ='<div style="color:red">我是<br>HTML代码</div>';
    var that = this;
    wxParse.wxParse('article', 'html', article, that, 5);
  }

 
})