var app=getApp();
Page({

  data: {
    Clsname: '',
    Usrid: '',
    Clsicon: "/images/addhead.png",
  },

  upimg:function(){
    var that = this; 
    wx.chooseImage({
      count: 1, // 最多可以选择的图片张数，默认9
      sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
      sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
      success: function (res) {
        // success
        console.log(res)
        that.setData({
          Clsicon: res.tempFilePaths
        })
      },
      fail: function () {
        wx.showToast({
          title: '服务器网络错误！',
          icon: 'loading',
          duration: 1500
        })
      },
      complete: function () {
        // complete
      },
    })
  },

  clsInput: function(e) {
    this.setData({
      Clsname: e.detail.value
    })
  },

  usrInput: function(e) {
    this.setData({
      Usrid: e.detail.value
    })
  },

  reset: function() {
    console.log('reset'),
      this.setData({
        Clsname: '',
        Usrid: '',
      })
  },

  sbmt: function() {
    var that=this;
    if (that.data.Clsname.length == 0 || that.data.Usrid.length == 0) {
      wx.showToast({

        title: '内容不得为空!',

        icon: 'loading',

        duration: 1500,

      })
    } else {
      wx.request({
        url: 'http://localhost:8081/api/teacher/newClass', 
        method: "POST",
        header: {"Authorization": app.globalData.token},
        data: {
          'Classname': that.data.Clsname,
          'Userid': that.data.Usrid,
          'Classicon': that.data.Clsicon,
        },

        success: function(res) {
          console.log(res)
          if (res.data.code == 'success') {

            wx.showToast({
              title: '班级生成！',
              icon: 'success',
              duration: 1500,
            })

            this.setData({
              Clsname: '',
              Usrid: '',
              Clsicon:'',

            })
          }
        }
      })
    }
  }
})


/*
  insertcls: function() {
    var cb = this.data.checkbox;
    var nData = {
      "Classname": '',
      'Userid': '',
    }
    console.log(cb.length);
    cb.push(nData);
    this.setData({
      checkbox: cb
    })
  },

  clsInput: function (e) {
    var testId=e.currentTarget.dataset.testid;
    this.setData({
      checkbox: e.detail.value.clsName
      
    })
  },


  deletecls: function() {
    var cb = this.data.checkbox;
    console.log(cb.length);
    cb.pop();
    this.setData({
      checkbox: cb
    })
  },
*/