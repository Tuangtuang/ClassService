Page
  ({

    /**
     * 页面的初始数据
     */
    data: {
      Teachername: "yzl", //之前的URL页面传来的登陆教师信息
      ClsArray: ['计院', '美院', '影院'],
      clsIndex: 0,
      PaprArray: ['数据结构', '艺术的渗透', '影帝的自我提升'],
      paperIndex: 0,
      Feedback: [{
          "Studentid": "16122131",
          "Studentname": "郭孟然",
          "Correctionrate": "100%"
        },
        {
          "Studentid": "16122253",
          "Studentname": "唐雨琪",
          "Correctionrate": "100%"
        },
        {
          "Studentid": "16122530",
          "Studentname": "马逸斐",
          "Correctionrate": "78%"
        }
      ],

      Allcorr: "60"
    },

    bindClsPickerChange: function(e) { //下拉框选择班级
      this.setData({
        clsIndex: e.detail.value
      }); //选择班级后，将班级信息发送给后端，后端返回试卷列表
/*
      wx.request({
        url: 'https://xxxxx/api/both/allPaper', //试卷列表的接口地址
        method: 'GET',
        data: {
          Classname: this.data.ClsArray[clsIndex]
        }, //发送班级数据，返回班级试卷列表
        // header:{'Accept': 'application/json'}
        success: function(res) {
          console.log('paper SUCCESS!!!');
          for (var index = 0; index < res.data.data.length; index++) {
            for (var name in res.data.data[index]) { //遍历该结构体
              if (name == 'Papername') {
                PaprArray.push(res.data.data[index][name])
              }
            }
          }
        },
        fail: function () {
          wx.showToast({
            title: '服务器网络错误！',
            icon: 'loading',
            duration: 1500
          })
        }
      })
*/
    },

    bindPaprPickerChange:function(e) { //下拉框选择试卷
      this.setData({
        paperIndex: e.detail.value
      })
    },

    tapConfirm: function() { //确定提交
      var that = this;

      console.log('班级', that.data.ClsArray[clsIndex]); //调试
      console.log('班级', that.data.PaprArray[paperIndex]); //调试
/*
      wx.request({
        url: 'https://xxxxx/api/teacher/paperInformation', //接口地址
        method: 'GET',
        data: { //给后端选择的班级和试卷名
          "Classname": that.data.ClsArray[clsIndex],
          "Papername": that.data.PaprArray[paperIndex]
        },
        // header:{'Accept': 'application/json'}
        success: function(res) {
          console.log('SUCCESS!!!'),
            console.log(res.data),
            that.setData({
              Feedback: res.data.Situations, //绑定Feedback,呈现数据
              Allcorr: Allcorrection,
            })
        },
        fail: function () {
          wx.showToast({
            title: '服务器网络错误！',
            icon: 'loading',
            duration: 1500
          })
        }
      })
 */
    },

 /**
     * 生命周期函数--监听页面加载，
  */
    onLoad: function(options) { //加载班级选择框内容，试卷选择框内容需要选择班级之后加载
      var that = this;
/*
      wx.request({
        url: 'https://xxxxx/api/teacher/allClass', //班级列表的接口地址
        method: 'GET',
        data: {
          Teachername: that.data.Teachername
        },
        // header:{'Accept': 'application/json'}
        success: function(res) {
          console.log('SUCCESS!!!');
          for (var index = 0; index < res.data.data.length; index++) {
            for (var name in res.data.data[index]) { //遍历该结构体
              if (name == 'Classname') {
                ClsArray.push(res.data.data[index][name])
              }
            }
          }
        }
      })
 */
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