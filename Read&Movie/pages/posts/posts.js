var postData=require('../../data/post-data.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    this.setData({
      postkey:postData.postList
    });
  },

  onTap: function(event)
  {
      var postId=event.currentTarget.dataset.id;
      //console.log("is "+postId);
      wx.navigateTo({
        url: 'post-detail/post-detail',
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
  } 
})