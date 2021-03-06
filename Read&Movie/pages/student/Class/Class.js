// pages/student/Class/Class.js
var ClassData= require("../../../data/Class-data.js")
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curClassName:'',
    groups:[
      {
        Classname: '',
        Teachername: '',
        Studentnumber: '',
        Classicon: '',
      }
    ],
    animationData: {
      
    },
    chooseSize: false,
  },


  chooseSezi: function (e) {
    //console.log(e.currentTarget.dataset.id);
    
    // 用that取代this，防止不必要的情况发生
    var that = this;
    that.setData({ curClassName: e.currentTarget.dataset.id});
    //console.log(that.data.curClassName);
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 300,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    animation.height(200);
    // 将该变量赋值给当前动画
    that.animation = animation
    // 先在y轴偏移，然后用step()完成一个动画
    animation.translateY(200).step()
    // 用setData改变当前动画
    that.setData({
      // 通过export()方法导出数据
      animationData: animation.export(),
      // 改变view里面的Wx：if
      chooseSize: true
    })
    // 设置setTimeout来改变y轴偏移量，实现有感觉的滑动
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },


  hideModal: function (e) {
    var that = this;
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear'
    })
    that.animation = animation
    animation.translateY(200).step()
    that.setData({
      animationData: animation.export()

    })
    //natemamama
    setTimeout(function () {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 200)
  },
  

  onClick:function(event){
    wx.navigateTo({
      url: '../../posts/posts?id=' + JSON.stringify(this.data.curClassName),
    })
  },


  ToPaper:function(event){
    wx.navigateTo({
      url: '../Paper/Paper?id=' + JSON.stringify(this.data.curClassName),
    })
  },


  ToClassmate:function(event)
  {
    wx.navigateTo({
      url: '../Classmate/Classmate?id='+JSON.stringify(this.data.curClassName),
    })
  },


  onLoad: function (options) {
    // this.setData({
    //   postkey:ClassData.postList
    // }     
    // );
    var that=this;
    wx.request({
      url: 'http://localhost:8081//api/student/classList',
      method:"GET",
      header: {
        "Authorization":app.globalData.token,
      },      
      success:function(res){
        console.log(res);
        that.setData({
          groups:res.data.data
        })
        console.log("传进去了？",that.data.groups);
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