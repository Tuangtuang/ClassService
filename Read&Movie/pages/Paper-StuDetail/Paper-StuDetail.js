// pages/Paper-StuDetail/ Paper-StuDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Papername: "影帝的自我修养", //上一个试卷列表页面传入本页
    Studentid: "", //输入框输入
    Problemtype: '', //输入框时输入
    Problem: "影帝为什么这么强？",
    Items: [{
        "name": "A",
        "value": "因为帅"
      },
      {
        "name": "B",
        "value": "因为强"
      },
      {
        "name": "C",
        "value": "因为能演"
      },
      {
        "name": "D",
        "value": "没有原因"
      }
    ],
    Studentanswer: "A",
    Rightanswer: "D",
    Iscorrect: "2"

  },


  StuidInput: function(e) {
    this.setData({
      Studentid: e.detail.value
    })
  },

  ProtypeInput: function(e) {
    this.setData({
      Problemtype: e.detail.value
    })
  },

  tapConfirm: function() { //点击确定按钮传数据
    var that = this;
    wx.request({
      url: 'https://xxxxx/api/both/singleProblems', //接口地址
      method: 'GET',
      data: {
        'Papername': that.data.Papername,
        'Studentid': that.data.Studentid,
        'Problemtype': that.data.Problemtype,
      },
      // header:{'Accept': 'application/json'}
      success: function(res) {
        console.log('SUCCESS!!!'),
          console.log(res.data),
          that.setData({
            Problem: res.data.Problem,
            Items: res.data.Items,
            Studentanswer: res.data.Studentanswer,
            Rightanswer: res.data.Rightanswer,
            Iscorrect: res.data.Iscorrect,
          })
      }

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