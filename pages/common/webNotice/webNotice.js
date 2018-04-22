Page({
  data:{
    nodes:[{
      name:"i",
      attrs:{
        style:"position:absolute;top:0;left:-6px;width:10px;height:10px;background:#afafaf;border-radius:50%;"
      } 
    }],
    nodes2: [{
      name: "p",
      attrs: {
        style: "font-size:12px;color:#666;margin-bottom:6px;line-height:12px;"
      },
      children: [{
        type: "text",
        text: "2017-02-02"
      }]
    }],
    picSrc: ['../../images/qrcode.png']
  },
  savePic:function(){
    wx.getSetting({
      success:(res)=>{
        wx.authorize({
          scope: 'scope.writePhotosAlbum',
          success(res) {
           
          }
        })
      }
    })
  },
  onLoad:function(options){
    wx.setNavigationBarTitle({
      title: options.topbarName
    })
  }
})