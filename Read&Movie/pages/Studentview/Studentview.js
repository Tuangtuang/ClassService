
//var clsdone = require('...............')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Classname: "影院", //前一个页面传来的参数：班级名
    studentinfo: [{
        "Studentname": "王五",
        "Studentid": "16122131",
      },
      {
        "Studentname": "赵六",
        "Studentid": "16122253",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    // wx.request({
    //   url: 'https://xxxxx/api/both/studentInformation', //返回全体学生的接口地址
    //   method: 'GET',
    //   data: {
    //     Classname: that.data.Classname
    //   },
    //   // header:{'Accept': 'application/json'}
    //   success: function(res) {
    //     console.log('SUCCESS!!!'),
    //       console.log(res.data),
    //       that.setData({
    //         studentinfo: res.data.data, //后端学生列表
    //       })
    //   },

    //   fail: function() {
    //     wx.showToast({
    //       title: '服务器网络错误！',
    //       icon: 'loading',
    //       duration: 1500
    //     })
    //   }
    //})

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