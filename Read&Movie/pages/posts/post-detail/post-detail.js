// pages/post-detail/post-detail.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Title: "",
    Content: "",
    Image: "",
    Publishtime: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that=this;
    console.log(options);
    var className = options.name;
    var noticeName = options.id;
    console.log(noticeName);
    wx.request({
      url: 'http://localhost:8081/api/both/someNotice',
      method: "GET",
      header: {
        "Authorization": app.globalData.token,
      },
      data: {
        "Classname": className,
        "Noticename": noticeName
      },
      success: function(res){
        console.log(res);
        that.setData({
          Title: res.data.data.Title,
          Content: res.data.data.Content,
          Image: res.data.data.Image,
          Publishtime: res.data.data.Publishtime
        })
      }
      
    })
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