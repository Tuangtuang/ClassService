// pages/Publish-post.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    max: 2000, //最多2000个字
    Image: "../../images/addhead.jpg",
    Classname: "",
    Title: "",
    Content: ""

  },

  //输入公告图
  upimg: function() {
    var that = this;
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function(res) {
        // success
        console.log(res)
        that.setData({
          Image: res.tempFilePaths
        })
      },
      fail: function() {
        wx.showToast({
          title: '服务器网络错误！',
          icon: 'loading',
          duration: 1500
        })
      },
      complete: function() {
        // complete
      },
    })
  },

  //输入班级内容
  clsInput: function(e) {
    this.setData({
      Classname: e.detail.value
    })
  },

  //输入公告标题
  titleInput: function(e) {
    this.setData({
      Title: e.detail.value
    })
  },

  //输入公告内容
  inputPost: function(e) {
    var value = e.detail.value;
    var len = parseInt(value.length); //获取公告长度
    if (len > this.data.max) {
      return;
    } //如果长度大于2000，则终止读取
    else {
      this.setData({
        Content: value
      })
    }
  },

  //表单提交按钮
  formSubmit: function (e) {
    var that=this
    console.log('form发生了submit');
    that.setData({
      Image: that.data.Image,
      Classname:that.data.Classname,
      Title: that.data.Title,
      Content: that.data.Content,
    }),
    wx.request({
      url: 'http://localhost:8081/api/teacher/newNotice',
      method:'POST',
      data:{
        Image: that.data.Image,
        Classname: that.data.Classname,
        Title: that.data.Title,
        Content: that.data.Content
      },
      header: { "Authorization": app.globalData.token,},
      success:function(res){
        console.log(res),
          wx.showToast({
            title: '发布成功',
            icon: 'SUCCESS',
            duration: 2000
          })
      },
      fail:function(res){
        console.log("FAIL"),
        wx.showToast({
          title: '发布失败',
          icon:'loading',
          duration:2000
        })
      }
    })
  },
  
  //表单重置按钮
  formReset: function (e) {
    var that=this
    console.log('form发生了reset事件');
    that.setData({
      Image: "../../images/addhead.jpg",
      Classname: '',
      Title: '',
      Content: '',
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