// pages/kart/kart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [{
        url: 'https://picsum.photos/300/220/?image=798'
      },
      {
        url: 'https://picsum.photos/300/220/?image=698'
      },
      {
        url: 'https://picsum.photos/300/220/?image=598'
      },
      {
        url: 'https://picsum.photos/300/220/?image=498'
      },
      {
        url: 'https://picsum.photos/300/220/?image=398'
      }
    ],
    items: [{
      message: '笑',
    }, {
      message: '喜'
    }, {
      message: '嘿'
    }, {
      message: '哈'
    }]
  },
  onClick: function(e) {
    var index = e.currentTarget.dataset.index; // 这里的index就是点击条目的角标
    wx.navigateTo({
      url: '../kart/club/club?title=' + this.data.items[index].message
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})