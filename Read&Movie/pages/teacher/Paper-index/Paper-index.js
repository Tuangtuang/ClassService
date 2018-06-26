var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var answer = 'A';
var MultipleAnswer;
var JudgeAnswer;
Page({
  data: {
    empty:'',
    SelectedA:false,
    SelectedB: false,
    SelectedC: false,
    SelectedD: false,
    SingleFromStore: '',
    MultipleFromStore: '',
    JudgeFromStore: '',
    tabs: ["单选题", "多选题", "判断题"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    focus: false,
    Single: [{
      Problem: "",
      A: '',
      B: '',
      C: '',
      D: '',
      Answer: ''
    }],
    Multiple: [{

    }],
    Judge: [{

    }],
    chooseSize: false,
    animationData: {}
  },
  bindButtonTap: function() {
    this.setData({
      focus: true,
    })
  },
  onLoad: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });

    wx.clearStorage({
      success: function (res) {
        that.setData({
          storageContent: ''
        })
      }
    })
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },


  onClick: function(e) {

  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    //单选题
    if (e.detail.value.Problem != '') {
      if (this.data.activeIndex == 0) {
        var single = {
          Problem: "",
          A: '',
          B: '',
          C: '',
          D: '',
          Answer: ''
        };
        single.Problem = e.detail.value.Problem;
        single.B = e.detail.value.B;
        single.A = e.detail.value.A;
        single.C = e.detail.value.C;
        single.D = e.detail.value.D;
        single.Answer = answer;
        console.log(single);
        this.data.Single.push(single);
        console.log(this.data.Single);
      }

    }


    //多选题
    if (e.detail.value.Problem != '') {
      if (this.data.activeIndex == 1) {
        var multiple = {
          Problem: "",
          A: '',
          B: '',
          C: '',
          D: '',
          Answer: ''
        };
        multiple.Problem = e.detail.value.Problem;
        multiple.A = e.detail.value.A;
        multiple.B = e.detail.value.B;
        multiple.C = e.detail.value.C;
        multiple.D = e.detail.value.D;
        multiple.Answer = MultipleAnswer;
        console.log(multiple);
        this.data.Multiple.push(multiple);
        console.log(this.data.Multiple);
      }
    }


    //判断题
    if (e.detail.value.Problem != '') {
      if (this.data.activeIndex == 2) {
        var judge = {
          Problem: "",
          Answer: ''
        };
        judge.Problem = e.detail.value.Problem;
        judge.Answer = JudgeAnswer;
        console.log(judge);
        this.data.Judge.push(judge);
        console.log(this.data.Judge);
      }
    }
    this.Status(e);
    this.setData({empty:''});
     wx.setStorage({
      key: 'Problem-List',
      data: this.data,
      success: function(res) {
        console.log(res)
      }
    })

  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  radioChange: function(e) {
    if (this.data.activeIndex == 0) {
      answer = e.detail.value;
      console.log('radio发生change事件，携带value值为：', answer)
    }
    if (this.data.activeIndex == 2) {
      var Judge = e.detail.value;
      if (Judge == 'A')
        JudgeAnswer = 1;
      else
        JudgeAnswer = 0;
      console.log('判断：', JudgeAnswer);
    }
  },
  checkboxChange: function(e) {
    var AnswerGroups = e.detail.value;
    MultipleAnswer = AnswerGroups.join(',');
    MultipleAnswer = MultipleAnswer.replace(/\,/g, '');
    console.log('checkbock发生change事件，携带value值为：', MultipleAnswer);

  },
  Status: function(e) {
    if (e.detail.value.Problem == '') {
      wx.showToast({
        title: '题目不能为空',
        icon: 'loading',
        duration: 500
      })
    } else {
      wx.showToast({
        title: '提交成功',
        icon: 'success',
        duration: 800
      })
    }
  },

  chooseSezi: function(e) {
    this.GetFromStore();
    //var that = this;
    // wx.getStorage({
    //   //获取数据的key
    //   key: 'key',
    //   success: function (res) {
    //     console.log(res)
    //     that.setData({
    //       //
    //       myNewData: res.data
    //     })
    //   },
    //   /**
    //    * 失败会调用
    //    */
    //   fail: function (res) {
    //     console.log(res)
    //   }
    // })
    // 用that取代this，防止不必要的情况发生
    var that = this;
    // 创建一个动画实例
    var animation = wx.createAnimation({
      // 动画持续时间
      duration: 300,
      // 定义动画效果，当前是匀速
      timingFunction: 'linear'
    })
    animation.height(400);
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
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)
  },

  hideModal: function(e) {
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
    setTimeout(function() {
      animation.translateY(0).step()
      that.setData({
        animationData: animation.export(),
        chooseSize: false
      })
    }, 200)
  },
  GetFromStore: function() {
    var that = this;
    wx.getStorage({
      //获取数据的key      
      key: 'Problem-List',
      success: function(res) {
        console.log(res)
        that.setData({
          JudgeFromStore: res.data.Judge,
          SingleFromStore:res.data.Single,
          MultipleFromStore:res.data.Multiple
        })
       
      },
      fail: function(res) {
        console.log(res)
      }
    })
  }

});