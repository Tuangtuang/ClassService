//index.js
//获取应用实例
var app = getApp()
//var ClassmateData=require("../../../data/Classmate-data.js")
Page({
  data: {
    groups: [],
    Classname: '',
  },


  onLoad: function(option) {
    var that = this;
    var id=JSON.parse(option.id);
    console.log(id);
    that.setData({
      //groups:ClassmateData.postList, 
      Classname: id,
    });
    console.log("Classname:", that.data.Classname);
    wx.request({
      url: 'http://localhost:8081/api/both/studentInformation',
      method: "GET",
      header: {
        "Authorization": app.globalData.token,
        //'content-type':'application/ x-www-form-urlencoded'
      },
      data: {
        "Classname": that.data.Classname
      },
      success: function(res) {
        console.log('同学名单',res);
        that.setData({
          groups: res.data.data
        })
      },
      fail: function(e) {
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }
    })
    //that.data.Classname = option.id;
    // console.log(option);
    // console.log("Classname:",that.data.Classname);
  }
})