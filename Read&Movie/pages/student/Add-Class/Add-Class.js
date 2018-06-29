// pages/student/Add-Class/Add-Class.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Classname: '',
    check:''
  },

  formSubmit: function(e) {
    console.log(e.detail.value);
    this.setData({
      Classname: e.detail.value.ClassName
    })
    this.setData({check:''})
    this.SendData();
  },
  SendData: function() {
    wx.request({
      url: 'http://localhost:8081/api/student/joinClass',
      method: 'POST',
      data: {
        "Classname": this.data.Classname,
        
      },
      header:{        
        "Authorization":app.globalData.token
      },

      success: function(res) {
        console.log(res);
        if (res.data.code == "SUCCESS") {
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 800
          });
          wx.redirectTo({
            url: '../student',
          })
        }
      
        else
        {
          if (res.data.message =="不存在这个班级")
          {
            wx.showToast({
              title: '班级不存在',
              icon: 'loading',
              duration: 500
            })
          }
          else{
            wx.showToast({
            title: '加入失败',
            icon: 'loading',
            duration: 500
          })
          }
          
        }
      },
      fail: function(e) {
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }
    })
  }
})