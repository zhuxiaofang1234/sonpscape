// pages/installProduct/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      activeName: "1",
      radio: '1',
      fileList: [{
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          deletable: true,
        }
      ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onChange(event) {
    this.setData({
      activeName: event.detail,
    });
  },

  configChange(e) {
    this.setData({
      radio: e.detail,
    });
  },

  afterRead(event) {
    const {
      file
    } = event.detail;
    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
      filePath: file.path,
      name: 'file',
      formData: {
        user: 'test'
      },
      success(res) {
        // 上传完成需要更新 fileList
        const {
          fileList = []
        } = this.data;
        fileList.push({
          ...file,
          url: res.data
        });
        this.setData({
          fileList
        });
      },
    });
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
  test: function () {
    console.log(33333);
  },
  onRateChange: function (e) {
    console.log(e)
  },

  //上一步
  goBack: function () {
    App.goBack()
  },

  //下一步--确认&培训
  next: function () {
    wx.navigateTo({
      url: '/pages/productTrain/index',
    })
  },

})