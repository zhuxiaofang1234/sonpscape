// pages/repair/index.js
const App = getApp();
import Notify from '../../miniprogram_npm/@vant/weapp/notify/notify';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    fileList: [{
        url: 'https://img.yzcdn.cn/vant/leaf.jpg',
        deletable: true,
      },
      {
        url: 'https://img.yzcdn.cn/vant/tree.jpg',
        deletable: false,
      },
    ]
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

  },
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
  //上一步
  goBack: function () {
    App.goBack()
  },
  //下一步--故障
  complete: function () {
  
    Notify({ type: 'success', message: '提交成功！'});
  }
})