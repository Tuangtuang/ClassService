// pages/student/Paper/Paper.js
//var PaperData=require("../../../data/paper-data.js")
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groups: [],
    Classname: '',
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    // this.setData({
    //   postkey: PaperData.postList
    // });
    var that =this;
    var id=JSON.parse(option.id);
    that.setData({
      Classname:id
    });
    console.log(this.data.Classname);
    wx.request({
      url: 'http://localhost:8081/api/both/allPaper',
      method:"GET",
      header:{
        "Authorization": app.globalData.token
      },
      data:{
        "Classname": this.data.Classname
      },
      success:function(res){
        console.log(res);
        that.setData({
          groups:res.data.data
        })
      },
      fail: function (e) {
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }
    })
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
  
  }
})