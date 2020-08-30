//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    images: ['../../images/images1.jpg', '../../images/images2.jpg', '../../images/images3.jpg'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {},

  //现场维修
  goRepair: function () {
    wx.navigateTo({
      url: '/pages/repair/index'
    })
  },
  //装机信息
  goInstall:function(){
    wx.navigateTo({
      url: '/pages/installEquipment/index',
    })
  }

})