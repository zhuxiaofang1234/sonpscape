// components/steps/index.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    steps: Array,
    active: Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      var index = event.currentTarget.dataset.index;
      var rateData ={
        index:index,
        value:event.detail
      };
      this.setData({
        value: event.detail,
      });
      this.triggerEvent('rateChange', rateData)
    }
  }
})
