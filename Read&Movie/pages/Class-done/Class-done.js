var proinfo = require('../../data/Classinfo.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    classinfo: proinfo.pinfo,
    Teacher: 'yzl',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    /*
    var that=this;
    wx.request({
      url: 'https://xxxxx/api/teacher/allClass', //接口地址
      method:'GET',
      data: { 'Teachername': that.data.Teacher},
     // header:{'Accept': 'application/json'}
     success:function(res){
       console.log('SUCCESS!!!'),
       console.log(res.data),
       that.setData({
         classinfo:res.data.data,
       })
     },

     fail:function(){
       wx.showToast({
         title:'服务器网络错误！',
         icon:'loading',
         duration:1500
       })
     }
    })
*/
  },
  


  /**
   *删除课程
   */
  deleteClick: function(e) {
    var cls = e.currentTarget.dataset.deletecls;
    var id = e.currentTarget.dataset.deleteid;
    var that=this;
    wx.showModal({
      title: '提示',
      content: '删除该班级',
      success: function(res){
        var class_info = that.data.classinfo;
        class_info.splice(id,1)
        that.setData({
          classinfo: class_info
        })
        console.log('删除成功');
      },
      fail: function () {
        wx.showToast({
          title: '服务器网络错误！',
          icon: 'loading',
          duration: 1500
        })
      }
    })
    
/*
    wx.request({
      url: 'https://xxxxx/api/teacher/allClass/delClass?cls' + cls, //?????删除课程的接口地址？？？？
      data {
        "Classname": cls,
      },
      method: 'GET',
      success: function(res) {
        if (res.data.status == 0) {
          wx.showToast({
            title: 'WAITING',
            icon: 'loading',
            duration: 1500,
          })
        } else {
          wx.showToast({
            title: 'SUCCESS!',
            icon: 'loading',
            duration: 1500
          })
        }
      },
      fail: function() {
        wx.showToast({
          title: '服务器网络错误!',
          icon: 'loading',
          duration: 1500
        })
      }



    })
 */
  },

  classView:function(e){
    wx.navigateTo({
      url: '../Studentview/Studentview',//查看该班级的全体学生
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

/*
module.exports(){

}
*/