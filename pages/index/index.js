//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toselect() {
    wx.navigateTo({
      url: '../select/select'
    })
  },

  
  //转发分享功能 
  onLoad: function (options) {
	 //开启分享好友功能
    wx.showShareMenu({
      withShareTicket: true
    });
  },

  onShareAppMessage: function () {
    return {
      title: 'BNU新年头像',  //分享时缩略图的名称
      success: (res) => {
        // 分享成功
      },
      fail: (res) => {
        // 分享失败
      }
    }
  }
})