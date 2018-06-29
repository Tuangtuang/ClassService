var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
var JudgeData = require('../../../data/judge-data.js');
var MultipleData = require('../../../data/multiple-data.js');
var SingleData = require('../../../data/single-data.js');
//var IdGroup=require('../Paper/Paper.js')
var app = getApp();
var AnswerTemp;
Page({
  data: {
    tabs: ["单选题", "多选题", "判断题"],
    activeIndex: 1,
    sliderOffset: 0,
    sliderLeft: 0,
    Judgegroups: [],
    Multiplegroups: [],
    Singlegroups: [],
    Paperid: '',
    Papername:'',
    Date:'',
    SingleAnswer:[],
    JudgeAnswer:[],
    MultipleAnswer:[]
  },
  onLoad: function(option) {
    // this.setData(
    //   {
    //     Judgegroups:JudgeData.postList,
    //     Multiplegroups:MultipleData.postList,
    //     Singlegroups:SingleData.postList
    //   }
    // );

    var that = this;
    var id = option.id;
    var name=option.name;
    var ddl=option.date;
    that.setData({
      Paperid: id,
      Problemtype: "1",
      Papername:name,
      Date:ddl
      
    });
    console.log("Paperid:", that.data.Paperid);
    console.log("Papername:",that.data.Papername);
    console.log("Date:", that.data.Date)
    wx.request({
      url: 'http://localhost:8081/api/student/paper',
      header: {
        "Authorization": app.globalData.token
      },
      data: {
        "Paperid": that.data.Paperid,
        "Problemtype": 1
      },
      success: function(res) {
        console.log(res);
        that.setData({
          Singlegroups: res.data.data
        });
        console.log("Singlegroup", that.data.Singlegroups)
      },
      fail: function(e) {
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }

    })
    wx.request({
      url: 'http://localhost:8081/api/student/paper',
      header: {
        "Authorization": app.globalData.token
      },
      data: {
        "Paperid": that.data.Paperid,
        "Problemtype": 2
      },
      success: function (res) {
        console.log(res);
        that.setData({
          Multiplegroups: res.data.data
        });
        //console.log("Multiplegroup", that.data.Singlegroups)
      },
      fail: function (e) {
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }

    })

    wx.request({
      url: 'http://localhost:8081/api/student/paper',
      header: {
        "Authorization": app.globalData.token
      },
      data: {
        "Paperid": that.data.Paperid,
        "Problemtype": 4
      },
      success: function (res) {
        console.log(res);
        that.setData({
          Judgegroups: res.data.data
        });
        console.log("Judgeroup", that.data.Judgegroups)
      },
      fail: function (e) {
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }

    })
    
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function(e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  radioChange:function(e){
    console.log('radio发生change事件，携带value值为：',e.detail.value);
    var judge={
      Problemid:'',
      Answer:''
    }
    var id = e.currentTarget.dataset.id;
    judge.Problemid=id;
    judge.Answer = e.detail.value;
    this.data.JudgeAnswer.push(judge);
    console.log(this.data.JudgeAnswer);
  },
  SingleChange:function(e){
    console.log('Singleradio发生change事件，携带value值为：', e.detail.value);
    var single={
      Problemid: '',
      Answer: ''
    };
    var id = e.currentTarget.dataset.id;
    single.Problemid=id;
    single.Answer=e.detail.value;
    this.data.SingleAnswer.push(single);
    console.log(this.data.SingleAnswer);
  },
  CheckboxChange:function(e){
    console.log('Checkbox发生change事件，携带value值为：', e.detail.value);
    var multiple={
      Problemid: '',
      Answer: ''
    };
    var id = e.currentTarget.dataset.id;
    multiple.Problemid=id;
    var AnswerGroups = e.detail.value;
    for (var i = 0; i < 4;i++){
      for(var j=i+1;j<4;j++){
        if (AnswerGroups[i] > AnswerGroups[j]) {
          var tmp = AnswerGroups[i];
          AnswerGroups[i] = AnswerGroups[j];
          AnswerGroups[j] = tmp;
        }
      }
    }
    AnswerTemp = AnswerGroups.join(',');
    AnswerTemp = AnswerTemp.replace(/\,/g, '');
    multiple.Answer=AnswerTemp;
    this.data.MultipleAnswer.push(multiple);
    console.log(this.data.MultipleAnswer);
  },
  submit:function(){
    var that=this;
    wx.request({
      url: 'http://localhost:8081/api/student/postAnswer',
      header:{
        "Authorization": app.globalData.token
      },
      method:"POST",
      data:{
        "Paperid":that.data.Paperid,
        "Single":that.data.SingleAnswer,
        "Multiple":that.data.MultipleAnswer,
        "Form":[],
        "Judge":that.data.JudgeAnswer,
      },
      success:function(res){
        console.log(res);
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 800
        });
      },
      fail:function(res){
        console.log(res);
        wx.showToast({
          title: '请检查网络',
          icon: 'loading',
          duration: 800
        })
      }
    })
  }
  
});