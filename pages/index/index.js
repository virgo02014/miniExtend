//index.js
//获取应用实例
var app = getApp();
Page({
  data: { // 参与页面渲染的数据
    userInfo: {},
    imgalist: ['http://ou73ndm0m.bkt.clouddn.com/jcjy.jpeg',
               'http://ou73ndm0m.bkt.clouddn.com/wx.jpg']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    });
  },
  onLoad: function () {
    // 页面渲染后 执行
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo: userInfo
      });
    });
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话");
      },
    })
  },
  previewImage: function (e) {
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.imgalist // 需要预览的图片http链接列表
    })
  }
});
