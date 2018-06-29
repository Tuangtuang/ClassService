//var postData=require('../../data/post-data.js');
var app=getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
      Classname:'',
      groups:[ ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(option) {
    var that = this;
    var id = JSON.parse(option.id);
    console.log(id);
    that.setData({
      //groups:ClassmateData.postList, 
      Classname: id,
    });
    //console.log("Classname:", that.data.Classname);
    //console.log(option.id); 
    wx.request({
      url: 'http://localhost:8081/api/both/allNotice',
      header:{
        "Authorization": app.globalData.token,
      },
      method:"GET",
      data:{
        "Classname":that.data.Classname
      },
      success:function(res){
          console.log(res);
          that.setData({
            groups:res.data.data
          })
      },
      fail:function(res){
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }

    })
    
  },

  onTap: function(event)
  {
      var id=event.currentTarget.dataset.id;
      //console.log("is "+postId);
      wx.navigateTo({
        url: 'post-detail/post-detail?name='+this.data.Classname+'&id='+id,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  } 
})